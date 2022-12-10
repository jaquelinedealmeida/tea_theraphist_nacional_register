import {Therapist} from './therapist.js';
import {certifications} from '../certifications/certifications.js'

class TherapistAba extends Therapist {

  crp = "";
  certificationsAba = "";

  constructor(fullName, cpf, crp, email, telephone, city, state, curriculum, certificationsAba) { 
    if (!crp) {
      throw new Error("It's necessary the CRP's number.");
    } 
    console.log("The CRP's number is correct.");
    
    super(fullName, cpf, email, telephone, city, state, curriculum) 
    this.crp = crp;
    this.validateCertificationsAba(certificationsAba);
  }

  validateCertificationsAba(certificationsAba){
    this.certificationsAba = certificationsAba;

    if(certifications.indexOf(certificationsAba) > -1){
     return "Therapist registered with successful."
     
    }else {
      throw new Error("Don't possible register without certifications.")
    }
  }
}


export {TherapistAba};



