/* Assumptions
  - We are working with JavaScript on the Front-End
  - All doctors are stored by specialty as JSON data in a "DOCTORS" store that's rendered from the backend
  - Doctors' JSON data was constructed with queries on the backend
  - Doctors contain the following instance variables: firstName, lastName, specialty, area (assumed to be hospital of practice)
*/

/* What our methods will do:
 - After a user enters a doctor, calls findSimilarDoctors(doctor)
 - finds doctors in the same specialty, then groups them by hospital/area, then sorts them by their review score and returns an array of those doctors
 - In the future, would prioritize area sort by placing doctors in the same area as the entered doctor at the top
*/

var findSimilarDoctors = function(doctor){
  // Grabs an array of doctors in the same specialty and removes the doctor that was entered from the array
  var similarDoctors = DOCTORS[doctor.specialty];

  // If the doctor is the only one in their specialty or an invalid doctor is entered, return no similar doctors
  if (similarDoctors === undefined || similarDoctors.length === 1) {
    return [];
  }

  similarDoctors.splice(similarDoctors.indexOf(doctor));
  var areaHash = sortByArea(similarDoctors);

  // Comparator that sorts scores from highest to lowest
  var scoreComparator = function (x, y) {
    if (x.score == y.score) {
      return 0;
    } else if (x.score < y.score) {
      return 1;
    } else {
      return -1;
    }
  };

  // Initialize array that will be returned as result
  var sortedDoctors = [];

  Object.keys(areaHash).forEach(function(area){
    // Each area is sorted by score
    areaHash[area] = areaHash[area].sort(scoreComparator);

    // Appends to sortedDoctors array that will be returned
    sortedDoctors =  sortedDoctors.concat(areaHash[area]);
  });

  return sortedDoctors;
};

// Sorts the doctors into separate arrays by their area
var sortByArea = function(doctors) {
  var areaHash = {};
  doctors.forEach(function(doctor) {
    if (!areaHash[doctor.area]) { areaHash[doctor.area] = []; }
    areaHash[doctor.area].push(doctor);
  });

  return areaHash;
};

var DOCTORS = {
  "pediatrics": [{firstName: "Trevor", lastName: "Thompson", specialty: "pediatrics", area: "Kaiser Oakland", score: 8},
  {firstName: "Tim", lastName: "Small", specialty: "pediatrics", area: "Kaiser Oakland", score: 7.8},
  {firstName: "Madison", lastName: "Reynolds", specialty: "pediatrics", area: "Kaiser Oakland", score: 9},
  {firstName: "Quinton", lastName: "Lewis", specialty: "pediatrics", area: "MD Anderson", score: 8.5}
  ],
  "oncology": [{firstName: "Michael", lastName: "Davis", specialty: "oncology", area: "Kaiser Oakland", score: 7},
  {firstName: "Mary", lastName: "Perez", specialty: "oncology", area: "Kaiser Oakland", score: 8},
  {firstName: "Wilma", lastName: "Cain", specialty: "oncology", area: "Kaiser Oakland", score: 10},
  {firstName: "Tony", lastName: "Won", specialty: "oncology", area: "MD Anderson", score: 10},
  {firstName: "Taariq", lastName: "Bronte", specialty: "oncology", area: "MD Anderson", score: 9}
  ],
};
