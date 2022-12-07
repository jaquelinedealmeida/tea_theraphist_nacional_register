const Therapist = require("./Therapist.js")

describe("Test of the class Therapist", () => {
    // beforeEach(() => {
    //     return therapist = new Therapist("Maria", "04567898710", "maria@email.com", "719898989", "Salvador", "Bahia")
    // });

    test("check if the instance Therapist is correct.", () => {
        const therapist = new Therapist();
        expect(therapist instanceof Therapist).toBe(true);
    });

    test("register therapist with validate datas", () => {
        const therapist = new Therapist();
        expect(therapist.registerTherapist("Maria", "04567898710", "maria@email.com", "7198989899", "Salvador", "Bahia")).toBe("Therapist was registered with successful.")
    });

    test('register therapist with invalidate datas', () => {
        const therapist = new Therapist();
    
        const test = () => {
            therapist.registerTherapist(
                'Maria',
                '04567898710',
                'maria@email.com',
                '7198989899',
                'Salvador'
            );
        };
        expect(test).toThrow('Datas are incomplete. Register not is correct.');
    });

});

