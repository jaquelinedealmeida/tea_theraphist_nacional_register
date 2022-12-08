import SpeechTherapy from "./SpeechTherapy.js"
describe("Test of the class SpeechTherapy", () => {

  test("check if the instance SpeechTherapy is correct.", () => {
    const speechTherapy = new SpeechTherapy();
    expect(speechTherapy instanceof SpeechTherapy).toBe(true);
  });
  
  test("Register speech therapy with validate datas", () => {
    const speechTherapy = new SpeechTherapy();
    expect(speechTherapy.registerSpeechTherapy("Fernanda Cristina", "45678398201", "CRFa 005-CE", "fcristina@email.com", "83 978945903", "Fortaleza", "Ceara")).toBe("Therapist was registered with successful.")
  });
  
  test('Register therapist with invalidate datas', () => {
    const speechTherapy = new SpeechTherapy();
      const test = () => {
        speechTherapy.registerSpeechTherapy("Fernanda Cristina", "45678398201", "CRFa 005-CE",);
      };
        expect(test).toThrow('Datas are incomplete. Register not is correct.');
  });
  
});
  