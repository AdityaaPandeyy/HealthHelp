import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})
export class DocdashComponent {
  patients : Patient[] = [];
  constructor(private patientService : PatientService, private router : Router, private docAuth : DocauthService){}
  ngOnInit() : void{
    this.getPatients();
  }

  getPatients():void{
    this.patientService.getPatientList().subscribe(data=>{
      this.patients = data;
    }
    )
  }

  delete(id : number) : void{
    this.patientService.deletePatient(id).subscribe(data=>{
      this.getPatients();
    })
  }

  update(id : number) : void{
    this.router.navigate(["update-patient",id])
  }
  
  logout(){
    this.docAuth.logout();
    this.router.navigate(["/home"]);
  }
}
