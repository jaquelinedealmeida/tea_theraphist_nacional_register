import Therapist from "./Therapist.js";

describe("Test of the class Therapist", () => {
    test("check if the instance Therapist is correct.", () => {
        const therapist = new Therapist();
        expect(therapist instanceof Therapist).toBe(true);
    });

    
});