import Therapist from './Therapist.js'
class SpeechTherapy extends Therapist {

  crfa = "";

  constructor(fullName, cpf, crfa, email, telephone, city, state, curriculum) { 
    if (!crfa) {
      throw new Error("It's necessary the crfa's number.");
    } 
    super(fullName, cpf, email, telephone, city, state, curriculum) 
    this.crfa = crfa;

    console.log("Therapist registered with successful.");
  }

}

const speechTherapy = new SpeechTherapy("Fernanda Cristina", "45678398201", "CRFa 005-CE", "fcristina@email.com", "83 978945903", "Fortaleza", "Ceara", true);

console.log(speechTherapy);

export default SpeechTherapy;