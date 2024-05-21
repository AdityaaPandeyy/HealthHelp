import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrl: './update-medicine.component.css'
})
export class UpdateMedicineComponent {
  id:number=0;
  medicine : Medicine = new Medicine();
  constructor(private route : ActivatedRoute, private medicineService : MedicineService, private router : Router){}

  ngOnInit(){
    this.id = this.route.snapshot.params["id"];
    this.getMedicineById(this.id);
  }

  getMedicineById(id : number){
    this.medicineService.getMedicine(this.id).subscribe(data => {
      this.medicine = data;
    })
  }

  updateMedicine(){
    this.medicineService.updateMedicine(this.id,this.medicine).subscribe(data => {
      this.goToMedicines();
    })
  }

  goToMedicines(){
    this.router.navigate(["/medicines"]);
  }

  onSubmit(){
    this.updateMedicine();
  }
}
