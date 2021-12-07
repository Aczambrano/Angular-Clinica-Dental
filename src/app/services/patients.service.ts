import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Patients } from '../models/patients';


import { FormPacienteComponent } from '../form-paciente/form-paciente.component';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  selectedPatients: Patients;

  patients!: Patients[];



  readonly URL_API = 'http://localhost:3000/api/patients/';

  constructor(private http:HttpClient) {
    this.selectedPatients = new Patients();
   }

   getPatients(){
    return this.http.get(this.URL_API);

  }

  postPatients(patients: Patients){
    return this.http.post(this.URL_API, patients);

  }

  putPatients(patients: Patients){
    return this.http.put(this.URL_API + `/${patients._id}`, patients);
  }

  deletePatients(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
