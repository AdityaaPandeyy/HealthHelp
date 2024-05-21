import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { MedicineComponent } from './medicine/medicine.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocLoginComponent } from './doc-login/doc-login.component';
import { AdLoginComponent } from './ad-login/ad-login.component';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { DocAuthGuardService } from './doc-auth-guard.service';

const routes: Routes = [
  {path:'admin',component:AdmindashComponent, canActivate : [AdminAuthGuardService]},
  {path:'appointments',component:AppointmentComponent, canActivate : [AdminAuthGuardService]},
  {path:'add-appointment',component:CreateAppointmentComponent, canActivate : [AdminAuthGuardService]},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'docdash',component:DocdashComponent, canActivate : [DocAuthGuardService]},
  {path:'add-patient',component:AddPatientComponent, canActivate : [DocAuthGuardService]},
  {path:'medicines',component:MedicineComponent, canActivate : [DocAuthGuardService]},
  {path:'add-medicine',component:AddMedicineComponent, canActivate : [DocAuthGuardService]},
  {path:'update-patient/:id', component:UpdatePatientComponent, canActivate : [DocAuthGuardService]},
  {path:'update-medicine/:id',component:UpdateMedicineComponent, canActivate : [DocAuthGuardService]},
  {path:'doc-login',component:DocLoginComponent},
  {path:'ad-login',component:AdLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
