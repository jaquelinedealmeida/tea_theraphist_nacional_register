import {Therapist} from './therapist.js'
import {certifications} from '../certifications/certifications.js'
class SpeechTherapy extends Therapist {

  crfa = "";
  certificationsSpeechTherapy = "";

  constructor(fullName, cpf, crfa, email, telephone, city, state, curriculum, certificationsSpeechTherapy) { 
    if (!crfa) {
      throw new Error("It's necessary the CRFA's number.");
    } 
    console.log("The CRFA's number is correct.");

    super(fullName, cpf, email, telephone, city, state, curriculum) 
    this.crfa = crfa;
    this.validateCertificationsSpeechTherapy(certificationsSpeechTherapy);

  }

  validateCertificationsSpeechTherapy(certificationsSpeechTherapy){

    this.certificationsSpeechTherapy = certificationsSpeechTherapy;

    if(certifications.indexOf(certificationsSpeechTherapy) > - 1){
     return "Therapist registered with successful."
     
    }else {
      throw new Error("Don't possible register without certifications.")
    }
  }

}

export {SpeechTherapy};