const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
};

//! ASSIGMENT
//? person2'nin adini ve maasini yazdiriniz.

console.log(`Name: ${people.person2.name}, Salary: ${people.person2.salary}`);

//? people objesindeki tum salary 'leri yazdirin (Dongu kullanilmali)

// const pp = Object.keys(people).map((v) => {
//   console.log(people[v].salary);
// });   //veya

const pp = Object.values(people);
pp.map((v) => console.log(v.salary));

//? job'i developer olanlarin dob degerlerini yazdiriniz.

let dob = pp.filter((d) => d.job == "developer").map((x) => x.dob);
console.log(dob);
