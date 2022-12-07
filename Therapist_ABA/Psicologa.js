const Therapist = require("../Therapist/Therapist")
const Rules = require("../Rules/Rules")

class Psicologa extends Therapist {

    #crp;

    registerTherapist(name, crp) { 
        super.registerTherapist(name) 
        this.#crp = crp
    }

    Rules 

}

module.exports = Psicologa

console.log(registerTherapist)