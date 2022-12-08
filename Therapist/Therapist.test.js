import Therapist from "./Therapist.js"
describe("Test of the class Therapist", () => {
    // beforeEach(() => {
    // return Therapist = new Therapist("Maria", "04567898710", "maria@email.com", "719898989", "Salvador", "Bahia")
    // });

    test("check if the instance Therapist is correct.", () => {
        const therapist = new Therapist();
        expect(therapist instanceof Therapist).toBe(true);
    });

});

