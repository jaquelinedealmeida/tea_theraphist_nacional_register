import {Therapist }from './Therapist.js'
import {certifications} from '../certifications/certifications.js'
class OccupationalTherapist extends Therapist {

  crefito = "";
  certificationsOccupationalTherapist = "";

  constructor(fullName, cpf, crefito, email, telephone, city, state, curriculum, certificationsOccupationalTherapist) { 

    if (!crefito) {
      throw new Error("It's necessary the CREFITO's number.");
    } 
    console.log("The CREFITO's number is correct.");

    super(fullName, cpf, email, telephone, city, state, curriculum) 
    this.crefito = crefito;
    this.validateCertificationsOccupational(certificationsOccupationalTherapist);

  }

  validateCertificationsOccupational(certificationsOccupationalTherapist){

    this.certificationsOccupationalTherapist = certificationsOccupationalTherapist;

    if(certifications.indexOf(certificationsOccupationalTherapist) > - 1){
     return "Therapist registered with successful."
     
    }else {
      throw new Error("Don't possible register without certifications.")
    }
  }

}


export { OccupationalTherapist};