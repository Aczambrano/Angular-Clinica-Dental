export class Patients {
   constructor(_id= '', nombre= '', apellido= '', cedula='', email= '', edad='', sexo='', seguro='', servicio=''){

    this._id=_id;
    this.nombre=nombre;
    this.apellido=apellido;
    this.cedula=cedula;
    this.email=email;
    this.edad=edad;
    this.sexo=sexo;
    this.seguro=seguro;
    this.servicio= servicio;

  }

  _id: string;
  nombre: string;
  apellido: string;
  cedula:string;
  email: string;
  edad: string;
  sexo: string;
  seguro: string;
  servicio: string;
}
