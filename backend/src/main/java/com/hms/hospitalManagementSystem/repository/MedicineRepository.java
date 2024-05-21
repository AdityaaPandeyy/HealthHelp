package com.hms.hospitalManagementSystem.repository;

import com.hms.hospitalManagementSystem.entity.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine,Long> {
}
