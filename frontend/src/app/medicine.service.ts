import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpClient : HttpClient) { }

  private baseUrl="http://localhost:8080/api/v3"

  getMedicineList() : Observable<Medicine[]>{
    return this.httpClient.get<Medicine[]>(`${this.baseUrl}`);
  }

  getMedicine(id : number) : Observable<Medicine>{
    return this.httpClient.get<Medicine>(`${this.baseUrl}/${id}`);
  }
  
  deleteMedicine(id : number) : Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }

  addMedicine(medicine : Medicine) : Observable<Medicine>{
    return this.httpClient.post<Medicine>(`${this.baseUrl}/add`,medicine);
  } 

  updateMedicine(id:number, medicine:Medicine) : Observable<Medicine>{
    return this.httpClient.put<Medicine>(`${this.baseUrl}/${id}`,medicine);
  }
}
