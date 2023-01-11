"use strict";

const carData = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Silver",
    mileage: 25000,
    engine: {
      type: "V6",
      horsepower: 300,
      cylinders: 6,
    },
  },
  {
    id: 2,
    make: "Honda",
    model: "Accord",
    year: 2019,
    color: "White",
    mileage: 20000,
    engine: {
      type: "V4",
      horsepower: 140,
      cylinders: 4,
    },
  },
  {
    id: 3,
    make: "Ford",
    model: "Mustang",
    year: 2018,
    color: "Red",
    mileage: 15000,
    engine: {
      type: "V8",
      horsepower: 400,
      cylinders: 8,
    },
  },
  {
    id: 4,
    make: "Chevrolet",
    model: "Camaro",
    year: 2017,
    color: "Black",
    mileage: 10000,
    engine: {
      type: "V4",
      horsepower: 200,
      cylinders: 4,
    },
  },
  {
    id: 5,
    make: "Dodge",
    model: "Challenger",
    year: 2016,
    color: "Blue",
    mileage: 5000,
    engine: {
      type: "V6",
      horsepower: 250,
      cylinders: 6,
    },
  },
  {
    id: 6,
    make: "BMW",
    model: "3 Series",
    year: 2015,
    color: "Silver",
    mileage: 35000,
    engine: {
      type: "V8",
      horsepower: 400,
      cylinders: 8,
    },
  },
  {
    id: 7,
    make: "Audi",
    model: "A4",
    year: 2014,
    color: "Black",
    mileage: 30000,
    engine: {
      type: "V4",
      horsepower: 220,
      cylinders: 4,
    },
  },
  {
    id: 8,
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2013,
    color: "White",
    mileage: 25000,
    engine: {
      type: "V6",
      horsepower: 280,
      cylinders: 6,
    },
  },
  {
    id: 9,
    make: "Volkswagen",
    model: "Golf",
    year: 2012,
    color: "Red",
    mileage: 20000,
    engine: {
      type: "V4",
      horsepower: 180,
      cylinders: 4,
    },
  },
  {
    id: 10,
    make: "Tesla",
    model: "Model S",
    year: 2011,
    color: "Silver",
    mileage: 15000,
    engine: {
      type: "V4",
      horsepower: 260,
      cylinders: 4,
    },
  },
];

// question-1: list the cars with grey color

carData.forEach((p) => console.log(p.color));
// alternative 1
// const silverCars = carData.filter(car => car.color === 'Silver')
// console.log(silverCars)
// alternative 2
// for (let i in carData) console.log(carData[i].color);

// question-2: list the cars produced after 2015
const productionYears = carData
  .filter((x) => x.year > 2015)
  .map((x) => console.log(x.make));

// question-3: get the average mileages of the cars
const averageMileage =
  carData.reduce((total, car) => total + car.mileage, 0) / carData.length;
console.log(averageMileage);
// alternative
// const averageMileages = carData.filter((y) => y.mileage).map((y) => y.mileage);
// function average(averageMileages) {
//   let sum = 0;
//   let count = averageMileages.length;
//   averageMileages.forEach((a) => (sum += a));
//   return `The average of the sum of the mileages is ${sum / count}`;
// }
// console.log(average(averageMileages));

// question-4: list the cars with 8 cylinders
const cylinderCount = carData
  .filter((x) => x.engine.cylinders > 4)
  .map((x) => console.log(x.engine.cylinders));

// question-5: Farklı uzunlukta olması muhtemel iki listeden İlki key'lerden, ikincisi ise Value'lardan oluşmaktadır. Yine key ve value'lardan oluşan bir obje döndüren bir fonksiyon yazınız. Yeterli value yoksa, kalan keylerin değeri null olmalıdır. Yeterli anahtar yoksa, değerlerin geri kalanını yok sayın.
// keys = ['a', 'b', 'c', 'd']
// values = [1, 2, 3]
// createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}
let keys = ["a", "b", "c", "d"];
let values = [1, 2, 3];

function createDict(keys, values) {
  let obj = {};
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i] || null;
  }
  return obj;
}

console.log(createDict(keys, values));

// question-6: replace the values in the objects. keys will be values and values will be keys

let obj = { a: 1, b: 2, c: 3 };
function reverseDict(obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
}
console.log(reverseDict(obj));
