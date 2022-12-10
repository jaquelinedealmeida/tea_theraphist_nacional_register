import Therapist from './Therapist.js'
class OccupationalTherapist extends Therapist {

  crefito = "";

  constructor(fullName, cpf, crefito, email, telephone, city, state, curriculum) { 
    if (!crefito) {
      throw new Error("It's necessary the crefito's number.");
    } 
    super(fullName, cpf, email, telephone, city, state, curriculum) 
    this.crefito = crefito;

    console.log("Therapist registered with successful.");
  }

}

const occupationalTherapist = new OccupationalTherapist("Aurora Vidal", "96785489234", "CREFITO 007-AM", "vidalaurora@email.com", "92 937892010", "Manaus", "Amazonas", true);

console.log(occupationalTherapist);

export default OccupationalTherapist;