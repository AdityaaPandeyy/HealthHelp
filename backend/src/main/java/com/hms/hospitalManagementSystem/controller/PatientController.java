package com.hms.hospitalManagementSystem.controller;

import com.hms.hospitalManagementSystem.entity.Patient;
import com.hms.hospitalManagementSystem.repository.PatientRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.AttributeNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class PatientController {
    private final PatientRepository patientRepository;

    public PatientController(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @PostMapping("/add")
    public Patient addPatient(@RequestBody Patient patient){
        return patientRepository.save(patient);
    }

    @GetMapping
    public List<Patient> getAllPatients(){
        return patientRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Patient> getPatientById(@PathVariable long id) throws AttributeNotFoundException {
        Patient patient = patientRepository.findById(id).orElseThrow(()-> new AttributeNotFoundException("Patient with id "+id+" not found"));
        return ResponseEntity.ok(patient);
    }

    @DeleteMapping("/patients/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteAppointment(@PathVariable long id){
        patientRepository.deleteById(id);
        Map<String,Boolean> response = new HashMap<String,Boolean>();
        response.put("Deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/patients/update/{id}")
    public ResponseEntity<Patient> updatePatient(@PathVariable long id, @RequestBody Patient patientDetails) throws AttributeNotFoundException {
        Patient patient = patientRepository.findById(id).orElseThrow(()->new AttributeNotFoundException("Patient with id "+ id + " not found"));
        patient.setAge(patientDetails.getAge());
        patient.setName(patientDetails.getName());
        patient.setBlood(patientDetails.getBlood());
        patient.setDose(patientDetails.getDose());
        patient.setFees(patientDetails.getFees());
        patient.setPrescription(patientDetails.getPrescription());
        patient.setUrgency(patientDetails.getUrgency());

        Patient updatedPatient = patientRepository.save(patient);
        return ResponseEntity.ok(updatedPatient);
    }

}
