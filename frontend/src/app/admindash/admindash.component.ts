import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { AdServiceService } from '../ad-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent {
  patients : Patient[]=[];
  constructor(private patientService : PatientService, private adService : AdServiceService, private router : Router){}
  ngOnInit() : void {
    this.getPatients(); 
  }
  getPatients(){
    this.patientService.getPatientList().subscribe(data => {
      this.patients = data;
    })
  }

  delete(id : number){
    this.patientService.deletePatient(id).subscribe(data => {
      this.getPatients();
    })
  }

  logout(){
    this.adService.logout();
    this.router.navigate(["/home"]);
  }
}
