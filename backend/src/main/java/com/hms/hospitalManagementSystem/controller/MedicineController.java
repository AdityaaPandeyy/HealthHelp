package com.hms.hospitalManagementSystem.controller;

import com.hms.hospitalManagementSystem.entity.Medicine;
import com.hms.hospitalManagementSystem.repository.MedicineRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.AttributeNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v3")
public class MedicineController {
    private final MedicineRepository medicineRepository;

    public MedicineController(MedicineRepository medicineRepository) {
        this.medicineRepository = medicineRepository;
    }

    @PostMapping("/add")
    public Medicine addMedicine(@RequestBody Medicine medicine){
        return medicineRepository.save(medicine);
    }

    @GetMapping
    public List<Medicine> getAllMedicines(){
        return medicineRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Medicine> getMedicine(@PathVariable long id) throws AttributeNotFoundException {
        Medicine medicine = medicineRepository.findById(id).orElseThrow(()-> new AttributeNotFoundException("Medicine with id "+id+" not found"));
        return ResponseEntity.ok(medicine);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteMedicine(@PathVariable long id){
        medicineRepository.deleteById(id);
        Map<String,Boolean> response = new HashMap<String,Boolean>();
        response.put("Deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Medicine> updateMedicine(@PathVariable long id, @RequestBody Medicine medicine) throws AttributeNotFoundException {
        Medicine medicine1 = medicineRepository.findById(id).orElseThrow(()-> new AttributeNotFoundException("Medicine with id "+id+" not found"));
        medicine1.setDrugName(medicine.getDrugName());
        medicine1.setStock(medicine.getStock());
        Medicine updatedMedicine = medicineRepository.save(medicine1);
        return ResponseEntity.ok(updatedMedicine);
    }
}
