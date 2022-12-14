import {OccupationalTherapist} from "../src/app/registerTherapists/occupationalTherapist.js"
describe("Test of the class OccupationalTherapist", () => {

  test("check if the instance OccupationalTherapy is correct.", () => {
    const occupationalTherapist = new OccupationalTherapist("Aurora Vidal", "96785489234", "CREFITO 007-AM", "vidalaurora@email.com", "92 937892010", "Manaus", "Amazonas", "Occupational Therapy", true, "CBIS");
    expect(occupationalTherapist instanceof OccupationalTherapist).toBe(true);
  });
  
  test("Register Occupational Therapist with invalidate crefito`s number.", () => {
    expect(() => new OccupationalTherapist).toThrow("It's necessary the CREFITO's number.");    
});

  test("Check if certifications are corrects", () => {
    const occupationalTherapist = new OccupationalTherapist("Aurora Vidal", "96785489234", "CREFITO 007-AM", "vidalaurora@email.com", "92 937892010", "Manaus", "Amazonas", "Occupational Therapy", true, "CBIS");
    expect(occupationalTherapist.validateCertificationsOccupational("CBIS")).toBe("Therapist registered with successful.");
  });

  test("Verify that the certifications are not correct.", () => {
    const occupationalTherapist = new OccupationalTherapist("Aurora Vidal", "96785489234", "CREFITO 007-AM", "vidalaurora@email.com", "92 937892010", "Manaus", "Amazonas", "Occupational Therapy", true, "CBIS");
    expect(() => occupationalTherapist.validateCertificationsOccupational()).toThrow("Don't possible register without certifications.");
  });
});
  