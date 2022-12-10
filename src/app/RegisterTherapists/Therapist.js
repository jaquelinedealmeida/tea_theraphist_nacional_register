import {id} from '../Helper/RegisterId.js'

class Therapist {
  
  fullName = "";
  #cpf = "";
  email = "";
  telephone = "";
  city = "";
  state = "";
  curriculum = false;
  id;

    constructor(fullName, cpf, email, telephone, city, state, curriculum){
      
      this.fullName = fullName;
      this.validateCpf(cpf)
      this.validateEmail(email);
      this.validateTelephone (telephone);
      this.city = city;
      this.state = state;
      this.validateCurriculum(curriculum);
      this.id = id;
    }

    validateCpf(cpf){
      let regexCPF = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;

      if(!regexCPF.test(cpf)){
        throw new Error ("CPF number is not valid.");
      }
        this.#cpf = cpf;
        return "CPF is validate."
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
        return "E-mail address is correct."
    }

    validateTelephone(telephone){
      let regexTelephone = /^\+?\(?([0-9]{2})?\)?\s?[0-9]{4,5}(-|\s)?[0-9]{4}$/;

      if(!regexTelephone.test(telephone)){
        throw new Error ("Telephone number is not valid.");
      }
        this.telephone = telephone;
        return "Telephone number is correct."
    }

    validateCurriculum(curriculum){
      if(!curriculum){
        throw new Error ("Curriculum not is validate");
      }
        this.curriculum = curriculum
        return "Curriculum is validate."
    }

    static Therapists ={
        therapistAba: [],
        speechTherapy: [],
        occupationalTherapist: []
    }
}

const therapist = new Therapist("Maria Santana", "04567898710", "maria@email.com", "71 989898989", "Salvador", "Bahia", true);
therapist.validateCpf;
console.log(therapist);

console.log(therapist.validateCpf("04567898710"));


export default Therapist;