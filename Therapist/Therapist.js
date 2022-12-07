class Therapist {
  name;
  #cpf;
  #email;
  #telefone;
  city;
  state;

    registerTherapist(name, cpf, email, telefone, city, state){
      if (!name || !cpf || !email || !telefone || !city || !state) {
        throw new Error("Datas are incomplete. Register not is correct.");
      } 
        this.name = name;
        this.#cpf = cpf;
        this.#email = email;
        this.#telefone = telefone;
        this.city = city;
        this.state = state

        return "Therapist was registered with successful."
        
    }

}
const therapist = new Therapist
therapist.registerTherapist("Maria", "04567898710", "maria@email.com", "719898989", "Salvador", "Bahia")

module.exports = Therapist;