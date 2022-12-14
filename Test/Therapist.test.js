import {Therapist} from "../src/app/registerTherapists/therapist.js"
describe("Test of the class Therapist", () => {
 
    test("Check if the instance Therapist is correct.", () => {
        const therapist = new Therapist("Maria Santana", "04567898710", "maria@email.com", "71 989898989", "Salvador", "Bahia", "ABA", true,);
        expect(therapist instanceof Therapist).toBe(true);
    });

    test("Check if CPF is validate", () => {
        const therapist = new Therapist("Maria Santana", "04567898710", "maria@email.com", "71 989898989", "Salvador", "Bahia", "ABA", true,);
        expect(therapist.validateCpf("04567898710")).toBe(true);
    });

    test("Check if number CPF is invalidate. ", () => {
        const therapist = new Therapist("Maria Santana", "04567898710", "maria@email.com", "71 989898989", "Salvador", "Bahia", "ABA", true,);
        expect(() => therapist.validateCpf("04567898")).toThrow("CPF number is not valid.");
    });

    test("Check if registered e-mail is correct.", () => {
        const therapist = new Therapist("Maria Santana", "04567898710", "maria@email.com", "71 989898989", "Salvador", "Bahia", "ABA", true,);
        expect(therapist.validateEmail("maria@email.com")).toBe(true);
    });

    test("Check if address e-mail is incorrect.", () => {
        const therapist = new Therapist("Maria Santana", "04567898710", "maria@email.com", "71 989898989", "Salvador", "Bahia", "ABA", true,);
        expect(() => therapist.validateEmail("maria@email.")).toThrow("Address e-mail is not valid.");
    });

    test("Check if telephone number is correct.", () => {
        const therapist = new Therapist("Maria Santana", "04567898710", "maria@email.com", "71 989898989", "Salvador", "Bahia", "ABA", true,);
        expect(therapist.validateTelephone("71 98989-8989")).toBe(true);
    });

    test("Check if address e-mail is incorrect.", () => {
        const therapist = new Therapist("Maria Santana", "04567898710", "maria@email.com", "71 989898989", "Salvador", "Bahia", "ABA", true,);
        expect(() => therapist.validateTelephone("71 98989-898")).toThrow("Telephone number is not valid.");
    });

    test("Check if therapy is validate", () => {
        const therapist = new Therapist("Maria Santana", "04567898710", "maria@email.com", "71 989898989", "Salvador", "Bahia", "ABA", true,);
        expect(therapist.validateTherapy("ABA")).toBe("Therapist registered with successful.");
    });

    test("Check if therapy not is validate", () => {
        const therapist = new Therapist("Maria Santana", "04567898710", "maria@email.com", "71 989898989", "Salvador", "Bahia", "ABA", true,);
        expect(() => therapist.validateTherapy()).toThrow("Therapy not is validate");
    });

    test("Check registration of validate curriculum", () => {
        const therapist = new Therapist("Maria Santana", "04567898710", "maria@email.com", "71 989898989", "Salvador", "Bahia", "ABA", true,);
        expect(therapist.validateCurriculum(true)).toBe("Curriculum is validate.");
    });

    test("Check register of curriculum invalid.", () => {
        const therapist = new Therapist("Maria Santana", "04567898710", "maria@email.com", "71 989898989", "Salvador", "Bahia", "ABA", true,);
        expect(() => therapist.validateCurriculum()).toThrow("Curriculum not is validate");
    });
});



