class Therapist {
  name;
  cpf;
  email;
  telefone;
  city;
  state;

    constructor(name, cpf, email, telefone, city, state){
      this.name = name;
      this.cpf = cpf;
      this.email = email;
      this.telefone = telefone;
      this.city = city;
      this.state = state

      return "Therapist was registered with successful."
        
    }
}

const therapist = new Therapist("Maria", "04567898710", "maria@email.com", "71 98989898", "Salvador", "Bahia");


console.log(therapist)

export default Therapist;
// module.exports = validateCPF