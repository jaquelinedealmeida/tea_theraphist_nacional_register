
import Therapist from '../Therapist/Therapist.js'

class SpeechTherapy extends Therapist {

  crfa;

  constructor() { 
    super() 
  }

  registerSpeechTherapy(name, cpf, crfa, email, telefone, city, state){
    if (!name || !cpf || !crfa || !email || !telefone || !city || !state) {
      throw new Error("Datas are incomplete. Register not is correct.");
    } 
      this.name = name;
      this.cpf = cpf;
      this.crfa = crfa
      this.email = email;
      this.telefone = telefone;
      this.city = city;
      this.state = state
  
      return "Therapist was registered with successful."  
    }

}

const speechTherapy = new SpeechTherapy();
speechTherapy.registerSpeechTherapy("Fernanda Cristina", "45678398201", "CRFa 005-CE", "fcristina@email.com", "83 978945903", "Fortaleza", "Ceara")

console.log(speechTherapy)
console.log(speechTherapy.registerSpeechTherapy)

export default SpeechTherapy;