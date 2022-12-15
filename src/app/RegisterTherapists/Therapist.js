import {id} from '../../helper/registerId.js'
import {therapies} from '../../app/therapies/therapies.js'

class Therapist {
  id;
  fullName = "";
  #cpf = "";
  email = "";
  telephone = "";
  city = "";
  state = "";
  curriculum = false;
  therapy = "";
  
    constructor(fullName, cpf, email, telephone, city, state, therapy, curriculum){
      
      this.fullName = fullName;
      this.validateCpf(cpf)
      this.validateEmail(email);
      this.validateTelephone(telephone);
      this.city = city;
      this.state = state;
      this.validateCurriculum(curriculum);
      this.validateTherapy(therapy);
      this.id = id;
    }

    validateCpf(cpf){
      let regexCPF = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;

      if(!regexCPF.test(cpf)){
        throw new Error ("CPF number is not valid.");
      }
        this.#cpf = cpf;
        return true
    }

    get valueCpf(){
      return this.#cpf;
    }

    validateEmail(email){
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if(!regexEmail.test(email)){
        throw new Error ("Address e-mail is not valid.");
      }
        this.email = email;
        return true 
    }

    validateTelephone(telephone){
      let regexTelephone = /^\+?\(?([0-9]{2})?\)?\s?[0-9]{4,5}(-|\s)?[0-9]{4}$/;

      if(!regexTelephone.test(telephone)){
        throw new Error ("Telephone number is not valid.");
      }
        this.telephone = telephone;
        return true 
    }

    validateTherapy(therapy){
      this.therapy = therapy;

      if(therapies.indexOf(therapy) > -1){
       return "Therapist registered with successful."
       
      }else {
        throw new Error ("Therapy not is validate");
      }
    }

    validateCurriculum(curriculum){
      if(!curriculum){
        throw new Error ("Curriculum not is validate");
      }
        this.curriculum = curriculum;
        return "Curriculum is validate."
    }

    static Therapists ={
      therapistAba: [],
      speechTherapy: [],
      occupationalTherapist: []
    }
}
export {Therapist}