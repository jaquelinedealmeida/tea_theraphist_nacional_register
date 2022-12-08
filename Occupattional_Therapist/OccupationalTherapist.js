
import Therapist from '../Therapist/Therapist.js'

class OccupationalTherapist extends Therapist {

  crefito;

  constructor() { 
    super() 
  }

  registerOccupationalTherapist(name, cpf, crefito, email, telefone, city, state){
    if (!name || !cpf || !crefito || !email || !telefone || !city || !state) {
      throw new Error("Datas are incomplete. Register not is correct.");
    } 
      this.name = name;
      this.cpf = cpf;
      this.crefito = crefito
      this.email = email;
      this.telefone = telefone;
      this.city = city;
      this.state = state
  
      return "Therapist was registered with successful."  
    }

}

const occupationalTherapist = new OccupationalTherapist();
occupationalTherapist.registerOccupationalTherapist("Aurora Vidal", "96785489234", "CREFITO 007-AM", "vidalaurora@email.com", "92 937892010", "Manaus", "Amazonas");

console.log(occupationalTherapist)
console.log(occupationalTherapist.registerOccupationalTherapist)

export default OccupationalTherapist;