import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.css'
})
export class MedicineComponent {
  medicines : Medicine[] = [];
  constructor(private medicineService : MedicineService, private router : Router){}
  ngOnInit(){
    this.getMedicines();
  }

  getMedicines() : void{
    this.medicineService.getMedicineList().subscribe(data => {
      this.medicines = data;
    })
  }

  delete(id : number){
    this.medicineService.deleteMedicine(id).subscribe(data => {
      this.getMedicines();
    })
  }

  update(id : number){
    this.router.navigate(["update-medicine",id])
  }
}
