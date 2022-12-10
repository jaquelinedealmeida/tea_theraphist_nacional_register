import SpeechTherapy from "../src/app/registerTherapists/SpeechTherapy.js"
describe("Test of the class SpeechTherapy", () => {

  test("check if the instance SpeechTherapy is correct.", () => {
    const speechTherapy = new SpeechTherapy("Fernanda Cristina", "45678398201", "CRFa 005-CE", "fcristina@email.com", "83 978945903", "Fortaleza", "Ceara", true, "Specialist");
    expect(speechTherapy instanceof SpeechTherapy).toBe(true);
  });

  test("Register Speech Therapy with invalidate crfa`s number.", () => {
    expect(() => new SpeechTherapy).toThrow("It's necessary the CRFA's number.");    
});

test("Check if certifications are corrects", () => {
  const speechTherapy = new SpeechTherapy("Fernanda Cristina", "45678398201", "CRFa 005-CE", "fcristina@email.com", "83 978945903", "Fortaleza", "Ceara", true, "Specialist");
  expect(speechTherapy.validateCertificationsSpeechTherapy("Specialist")).toBe("Therapist registered with successful.");
});

test("Verify that the certifications are not correct.", () => {
  const speechTherapy = new SpeechTherapy("Fernanda Cristina", "45678398201", "CRFa 005-CE", "fcristina@email.com", "83 978945903", "Fortaleza", "Ceara", true, "Specialist");
  expect(() => speechTherapy.validateCertificationsSpeechTherapy()).toThrow("Don't possible register without certifications.");
});

  
});

  