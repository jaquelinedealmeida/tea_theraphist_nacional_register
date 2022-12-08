import OccupationalTherapist from "./OccupationalTherapist.js"
describe("Test of the class OccupationalTherapist", () => {

  test("check if the instance OccupationalTherapy is correct.", () => {
    const occupationalTherapist = new OccupationalTherapist();
    expect(occupationalTherapist instanceof OccupationalTherapist).toBe(true);
  });
  
  test("Register occupational therapy with validate datas", () => {
    const occupationalTherapist = new OccupationalTherapist();
    expect(occupationalTherapist.registerOccupationalTherapist("Aurora Vidal", "96785489234", "CREFITO 007-AM", "vidalaurora@email.com", "92 937892010", "Manaus", "Amazonas")).toBe("Therapist was registered with successful.")
  });
  
  test('Register therapist with invalidate datas', () => {
    const occupationalTherapist = new OccupationalTherapist();
      const test = () => {
        occupationalTherapist.registerOccupationalTherapist("Aurora Vidal", "96785489234", "CREFITO 007-AM", "vidalaurora@email.com",);
      };
        expect(test).toThrow('Datas are incomplete. Register not is correct.');
  });
  
});
  