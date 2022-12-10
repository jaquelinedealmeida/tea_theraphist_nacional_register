import SpeechTherapy from "../src/app/RegisterTherapists/SpeechTherapy"
describe("Test of the class SpeechTherapy", () => {

  test("check if the instance SpeechTherapy is correct.", () => {
    const speechTherapy = new SpeechTherapy("Fernanda Cristina", "45678398201", "CRFa 005-CE", "fcristina@email.com", "83 978945903", "Fortaleza", "Ceara", true);
    expect(speechTherapy instanceof SpeechTherapy).toBe(true);
  });

  test("Register therapist Speech Therapy with invalidate crfa`s number.", () => {
    expect(() => new SpeechTherapy).toThrow("It's necessary the crfa's number.");    
});

  
});
  