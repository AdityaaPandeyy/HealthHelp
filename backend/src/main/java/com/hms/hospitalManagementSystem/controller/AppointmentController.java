package com.hms.hospitalManagementSystem.controller;

import com.hms.hospitalManagementSystem.entity.Appointment;
import com.hms.hospitalManagementSystem.repository.AppointmentRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v2")
public class AppointmentController {
    private final AppointmentRepository appointmentRepository;

    public AppointmentController(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    @PostMapping("/create")
    public Appointment createAppointment(@RequestBody Appointment appointment){
        return appointmentRepository.save(appointment);
    }

    @GetMapping
    public List<Appointment> getAllAppointments(){
        return appointmentRepository.findAll();
    }

    @DeleteMapping("/appointments/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteAppointment(@PathVariable long id){
        appointmentRepository.deleteById(id);
        Map<String,Boolean> response = new HashMap<String,Boolean>();
        response.put("Deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
