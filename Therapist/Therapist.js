class Therapist {
    name;
    #cpf;
    #email;
    #telefone;
    city;
    state;
    registerTherapist(name, cpf, email, telefone, city, state){
        this.name = name;
        this.#cpf = cpf;
        this.#email = email;
        this.#telefone = telefone;
        this.city = city;
        this.state = state

        return "Therapist was registered with successful.";
        // throw new ("Register not is correct.") ;
    }
}


therapist = new Therapist()
therapist.registerTherapist("Maria", "04567898710", "maria@email.com", "719898989", "Salvador")

module.exports = Therapist;