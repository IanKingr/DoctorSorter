// Jasmine Unit Test Cases that can be run by opening the attached html file
describe("findSimilarDoctors", function () {
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

  var doctor1 = DOCTORS["oncology"][0];
  var results1 = [ { firstName: 'Wilma',
    lastName: 'Cain',
    specialty: 'oncology',
    area: 'Kaiser Oakland',
    score: 10 },
  { firstName: 'Mary',
    lastName: 'Perez',
    specialty: 'oncology',
    area: 'Kaiser Oakland',
    score: 8 },
  { firstName: 'Michael',
    lastName: 'Davis',
    specialty: 'oncology',
    area: 'Kaiser Oakland',
    score: 7 },
  { firstName: 'Tony',
    lastName: 'Won',
    specialty: 'oncology',
    area: 'MD Anderson',
    score: 10 } ];

  var doctor2 = DOCTORS["pediatrics"][0];
  var results2 = [ { firstName: 'Madison',
    lastName: 'Reynolds',
    specialty: 'pediatrics',
    area: 'Kaiser Oakland',
    score: 9 },
  { firstName: 'Trevor',
    lastName: 'Thompson',
    specialty: 'pediatrics',
    area: 'Kaiser Oakland',
    score: 8 },
  { firstName: 'Tim',
    lastName: 'Small',
    specialty: 'pediatrics',
    area: 'Kaiser Oakland',
    score: 7.8 } ];

  var doctor3 = [{ firstName: 'Jim',
    lastName: 'Henson',
    specialty: 'emergency medicine',
    area: 'Kaiser Oakland',
    score: 9.7 } ]

  it("finds doctors in the oncology specialty and sorts them by area then by score", function () {
    expect(findSimilarDoctors(doctor1)).toEqual(results1);
  });

  it("finds doctors in the pediatrics specialty and sorts them by area then by score", function () {
    expect(findSimilarDoctors(doctor2)).toEqual(results2);
  });

  it("result should not contain the doctor that was entered as an argument", function () {
    expect(findSimilarDoctors(doctor2).indexOf(doctor2)).toEqual(-1);
  });

  it("returns nothing if the doctor is the only one in his/her specialty", function () {
    expect(findSimilarDoctors(doctor3)).toEqual([]);
  });
});
