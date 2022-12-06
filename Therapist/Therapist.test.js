const Therapist = require("./Therapist.js")

describe("Test of the class Therapist", () => {
    // beforeEach(() => {
    //     return therapist = new Therapist("Maria", "04567898710", "maria@email.com", "719898989", "Salvador", "Bahia")
    // });

    test("check if the instance Therapist is correct.", () => {
        const therapist = new Therapist();
        expect(therapist instanceof Therapist).toBe(true);
    });

    test("register therapist with validate dates", () => {
        const therapist = new Therapist();
        expect(therapist.registerTherapist("Maria", "04567898710", "maria@email.com", "719898989", "Salvador", "Bahia")).toBe("Therapist was registered with successful.")
    });

    test("Register therapist with invalidate dates", () => {
        const therapist = new Therapist();
        expect(therapist.registerTherapist("Maria", "04567898710", "maria@email.com", "719898989", "Salvador")).toThrow("Register not is correct.")
    });

    
});