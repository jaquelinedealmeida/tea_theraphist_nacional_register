import Therapist from '../Therapist/Therapist.js'

class TherapistAba extends Therapist {

  crp;

  constructor() { 
    super() 
  }

  registerTherapistAba(name, cpf, crp, email, telefone, city, state){
    if (!name || !cpf || !crp || !email || !telefone || !city || !state) {
      throw new Error("Datas are incomplete. Register not is correct.");
    } 
      this.name = name;
      this.cpf = cpf;
      this.crp = crp
      this.email = email;
      this.telefone = telefone;
      this.city = city;
      this.state = state
  
      return "Therapist was registered with successful."  
    }

}

const therapistAba = new TherapistAba();
therapistAba.registerTherapistAba("Samira Fernandes", "87694736781", "CRP 004-RJ", "samisf@email.com", "21 383989890", "Rio de Janeiro", "Rio de Janeiro")

console.log(therapistAba)
console.log(therapistAba.registerTherapistAba)

export default TherapistAba;



