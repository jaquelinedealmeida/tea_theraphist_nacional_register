import TherapistAba from "../src/app/RegisterTherapists/TherapistAba.js"


describe("Test of the class TherapistAba", () => {

  test("check if the instance TherapistAba is correct.", () => {
    const therapistAba = new TherapistAba("Samira Fernandes", "87694736781", "CRP 004-RJ", "samisf@email.com", "21 383989890", "Rio de Janeiro", "Rio de Janeiro", true, "Master");
    expect(therapistAba instanceof TherapistAba).toBe(true);
  });


  test("Register therapist ABA with invalidate crp`s number.", () => {
      expect(() => new TherapistAba).toThrow("It's necessary the CRP's number.");    
  });

  test("Check if certifications are corrects", () => {
    const therapistAba = new TherapistAba("Samira Fernandes", "87694736781", "CRP 004-RJ", "samisf@email.com", "21 38398-9890", "Rio de Janeiro", "Rio de Janeiro", true, "Master");
    expect(therapistAba.validateCertificationsAba("Master")).toBe("Therapist registered with successful.");
});

test("Verify that the certifications are not correct.", () => {
  const therapistAba = new TherapistAba("Samira Fernandes", "87694736781", "CRP 004-RJ", "samisf@email.com", "21 38398-9890", "Rio de Janeiro", "Rio de Janeiro", true, "Master");
  expect(() => therapistAba.validateCertificationsAba()).toThrow("Don't possible register without certifications.");
});

});
