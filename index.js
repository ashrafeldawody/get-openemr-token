import { Issuer } from 'openid-client';

const openEmr = await Issuer.discover('https://ten.openemr.io/openemr/oauth2/default');
console.log('Discovered issuer %s %O', openEmr.issuer, openEmr.metadata);

const client = new openEmr.Client({
    client_id: 'client_id',
    client_secret: 'secret',
    response_types: ['code'],
    
});

client.grant({
    grant_type: 'password',
    client_id: 'client_id',
    scope: 'openid fhirUser online_access offline_access launch launch/patient api:oemr api:fhir api:port system/Patient.$export system/Group.$export system/*.$bulkdata-status system/*.$export profile name address given_name family_name nickname phone phone_verified email email_verified site:default patient/AllergyIntolerance.read patient/Appointment.read patient/Binary.read patient/CarePlan.read patient/CareTeam.read patient/Condition.read patient/Coverage.read patient/Device.read patient/DiagnosticReport.read patient/DocumentReference.$docref patient/DocumentReference.read patient/Encounter.read patient/Goal.read patient/Immunization.read patient/Location.read patient/Medication.read patient/MedicationRequest.read patient/Observation.read patient/Organization.read patient/Patient.read patient/Person.read patient/Practitioner.read patient/Procedure.read patient/Provenance.read system/AllergyIntolerance.read system/Appointment.read system/Binary.read system/CarePlan.read system/CareTeam.read system/Condition.read system/Coverage.read system/Device.read system/DiagnosticReport.read system/DocumentReference.$docref system/DocumentReference.read system/Encounter.read system/Goal.read system/Group.read system/Immunization.read system/Location.read system/Medication.read system/MedicationRequest.read system/Observation.read system/Organization.read system/Patient.read system/Person.read system/Practitioner.read system/PractitionerRole.read system/Procedure.read system/Provenance.read user/AllergyIntolerance.read user/Appointment.read user/Binary.read user/CarePlan.read user/CareTeam.read user/Condition.read user/Coverage.read user/Device.read user/DiagnosticReport.read user/DocumentReference.$docref user/DocumentReference.read user/Encounter.read user/Goal.read user/Immunization.read user/Location.read user/Medication.read user/MedicationRequest.read user/Observation.read user/Organization.read user/Organization.write user/Patient.read user/Patient.write user/Person.read user/Practitioner.read user/Practitioner.write user/PractitionerRole.read user/Procedure.read user/Provenance.read',
    user_role: 'users',
    username: 'admin',
    password: 'pass',
}).then((tokenSet) => {
    console.log(tokenSet);
});

