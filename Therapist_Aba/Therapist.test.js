import TherapistAba from "./TherapistAba.js"

describe("Test of the class TherapistAba", () => {

  test("check if the instance TherapistAba is correct.", () => {
    const therapistAba = new TherapistAba();
    expect(therapistAba instanceof TherapistAba).toBe(true);
  });

  test("Register therapist ABA with validate datas", () => {
    const therapistAba = new TherapistAba();
    expect(therapistAba.registerTherapistAba("Samira Fernandes", "87694736781", "CRP 004-RJ", "samisf@email.com", "21 383989890", "Rio de Janeiro", "Rio de Janeiro")).toBe("Therapist was registered with successful.")
  });

  test('Register therapist with invalidate datas', () => {
    const therapistAba = new TherapistAba();
    const test = () => {
      therapistAba.registerTherapistAba("Samira Fernandes", "87694736781", "CRP 004-RJ", "samisf@email.com", "21 383989890");
      };
        expect(test).toThrow('Datas are incomplete. Register not is correct.');
  });

});
