import OccupationalTherapist from "../src/app/RegisterTherapists/OccupationalTherapist.js"
describe("Test of the class OccupationalTherapist", () => {

  test("check if the instance OccupationalTherapy is correct.", () => {
    const occupationalTherapist = new OccupationalTherapist("Aurora Vidal", "96785489234", "CREFITO 007-AM", "vidalaurora@email.com", "92 937892010", "Manaus", "Amazonas", true);
    expect(occupationalTherapist instanceof OccupationalTherapist).toBe(true);
  });
  
  test("Register therapist Occupational Therapist with invalidate crefito`s number.", () => {
    expect(() => new OccupationalTherapist).toThrow("It's necessary the crefito's number.");    
});

  
});
  