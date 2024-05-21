import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css'
})
export class UpdatePatientComponent {
  id : number = 0;
  patient : Patient = new Patient();
  constructor(private route : ActivatedRoute, private patientService : PatientService, private router : Router){}

  ngOnInit(){
    this.id = this.route.snapshot.params["id"];
    this.getPatientById(this.id);
  }

  getPatientById(id : number){
    this.patientService.getPatient(id).subscribe(data => {
      this.patient = data;
    })
  }

  updatePatient(){
    this.patientService.updatePatient(this.id,this.patient).subscribe(data => {
      this.goToPatients();
    })
  }

  goToPatients(){
    this.router.navigate(["/docdash"])
  }

  onSubmit(){
    this.updatePatient();
  }
}
