class Therapist {
    name;
    #cpf;
    #email;
    #telefone;
    city;
    state;
    constructor(name, cpf, email, telefone, city, state){
        this.name = name;
        this.#cpf = cpf;
        this.#email = email;
        this.#telefone = telefone;
        this.city = city;
        this.state = state
    }

}

module.exports = Therapist;