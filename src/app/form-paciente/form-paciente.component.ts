import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AnyArray } from 'mongoose';
import { Patients } from '../models/patients';

import { PatientsService } from '../services/patients.service';

declare var M: any;

@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.scss'],
  providers: [PatientsService]
})



export class FormPacienteComponent implements OnInit {


  tiposServicios: string[];

   checkGender=false;
   checkSeguro=false;



  constructor(public patientsService: PatientsService) {

    this.tiposServicios = ['Cirugía Oral', 'Odontología', 'Periodoncia', 'Terapéutica dental'];
  }


  ngOnInit(): void {

    this.getPatients();

    this.checkGender=false;
    this.checkSeguro=false;

    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, Option);
  });
  }

  createPatients(form: NgForm) {
    if (form.value._id) {
      this.patientsService.putPatients(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({ html: 'Registro actualizado' });
        this.getPatients();
      });
    } else{
      this.patientsService.postPatients(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({ html: 'Nuevo registro guardado' });
        this.getPatients();
      });
    }
  }

  getPatients() {
    this.patientsService.getPatients().subscribe((res) => {
      this.patientsService.patients = res as Patients[];
      console.log(res);
    });
  }

  updatePatients(patients: Patients) {
    this.patientsService.selectedPatients = patients;
    this.patientsService.putPatients(patients);
  }

  deletePatients(_id: string) {

     if(confirm('¿Estas seguro de eliminar este registro?')){
        this.patientsService.deletePatients(_id)
        .subscribe(res => {
           M.toast({ html: 'Registro eliminado' });
          this.getPatients();
         });
     }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.patientsService.selectedPatients = new Patients();
    }
  }

  validRadioButton(form: NgForm){
    if(form.value.sexo){
      this.checkGender=true;
    }
     if(form.value.seguro){
      this.checkGender=true;
    }
  }




}
