import {Therapist} from "./app/registerTherapists/Therapist.js";
import {TherapistAba} from "./app/registerTherapists/TherapistAba.js"
import {SpeechTherapy} from "./app/registerTherapists/SpeechTherapy.js"
import {OccupationalTherapist} from "./app/registerTherapists/OccupationalTherapist.js"


const therapist = new Therapist("Maria Santana", "04567898710", "maria@email.com", "71 989898989", "Salvador", "Bahia", "ABA", true,);
therapist.validateCpf;
therapist.valueCpf;

console.log(therapist);
console.log(therapist.valueCpf);
// 
const therapistAba = new TherapistAba("Samira Fernandes", "87694736781", "CRP 004-RJ", "samisf@email.com", "21 38398-9890", "Rio de Janeiro", "Rio de Janeiro", "ABA", true,"BCPA", );
therapistAba.validateCertificationsAba("BCPA");
therapistAba.valueCpf;
therapistAba.validateCurriculum;


console.log(therapistAba);
console.log(therapistAba.validateCertificationsAba("BCPA"));
console.log(therapist.validateCpf("87694736781"));

// 
const speechTherapy = new SpeechTherapy("Fernanda Cristina", "45678398201", "CRFa 005-CE", "fcristina@email.com", "83 978945903", "Fortaleza", "Ceara", "Speech Therapy", true, "Specialist");
speechTherapy.validateCertificationsSpeechTherapy;

console.log(speechTherapy);
console.log(speechTherapy.validateCertificationsSpeechTherapy("Specialist"));

// 
const occupationalTherapist = new OccupationalTherapist("Aurora Vidal", "96785489234", "CREFITO 007-AM", "vidalaurora@email.com", "92 937892010", "Manaus", "Amazonas", "Occupational Therapy", true, "CBIS");
occupationalTherapist.validateCertificationsOccupational;

console.log(occupationalTherapist);
console.log(occupationalTherapist.validateCertificationsOccupational("CBIS"));