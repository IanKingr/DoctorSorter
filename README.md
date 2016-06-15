# DoctorSorter
Simple JS functions to sort Doctors

After entering a doctor, #findSimilarDoctors finds doctors in the same specialty. 

It then sorts them by area (hospital of practice) and then by score

## Assumptions
  - We are working with JavaScript on the Front-End
  - All doctors are stored by specialty as JSON data in a "DOCTORS" store or variable that's rendered from the backend
  - DOCTORS's JSON data was constructed with queries on the backend e.g. ActiveRecord query like @pediatrics = Doctor.where("specialty = ?", "pediatrics")
  - Doctors contain the following instance variables: firstName, lastName, specialty, area (assumed to be hospital of practice)

## Unit Test Cases
  - Jasmine unit test cases were written for the static data provided
  - Spec file can be run by opening SpecRunner.html file
