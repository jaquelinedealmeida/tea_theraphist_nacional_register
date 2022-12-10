import Therapist from './Therapist.js';
import {certifications} from '../Certifications/Certifications.js'

class TherapistAba extends Therapist {

  crp = "";
  certificationsAba = "";

  constructor(fullName, cpf, crp, email, telephone, city, state, curriculum, certificationsAba) { 
    if (!crp) {
      throw new Error("It's necessary the CRP's number.");
    } 
    super(fullName, cpf, email, telephone, city, state, curriculum) 
    this.crp = crp;
    this.validateCertificationsAba(certificationsAba);
    console.log("The CRP's number is correct.");
  }

  validateCertificationsAba(certificationsAba){
    this.certificationsAba = certificationsAba;

    if(certifications.indexOf(certificationsAba) > - 1){
     return "Therapist registered with successful."
     
    }else {
      throw new Error("Don't possible register without certifications.")
    }
  }
}

const therapistAba = new TherapistAba("Samira Fernandes", "87694736781", "CRP 004-RJ", "samisf@email.com", "21 38398-9890", "Rio de Janeiro", "Rio de Janeiro", true, "Master");
therapistAba.validateCertificationsAba("Master")
// therapistAba.validationCertificates("certificationsAba");

console.log(therapistAba);
console.log(therapistAba.validateCertificationsAba("Master"));

export default TherapistAba;



