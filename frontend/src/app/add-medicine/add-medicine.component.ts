import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrl: './add-medicine.component.css'
})
export class AddMedicineComponent {
  medicine:Medicine=new Medicine();
  constructor(private medicineService : MedicineService, private router : Router){}

  addMedicine(){
    this.medicineService.addMedicine(this.medicine).subscribe(data => {
      this.goToMedicines();
    })
  }

  goToMedicines(){
    this.router.navigate(["/medicines"]);
  }
  onSubmit(){
    this.addMedicine();
  }
}
