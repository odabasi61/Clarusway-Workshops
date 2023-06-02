// console.log('Hello World')

// const button = document.getElementById('submit')!;
// const a = document.getElementById('input1')! as HTMLInputElement;
// const b = document.getElementById('input2')! as HTMLInputElement;
// const result = document.getElementById('result')!;

let x = "5";
x = "ww";
// x = false
// hata giderildi

// function add(a :number, b: number) {
//     return a + b;
// }
// button.addEventListener('click', function () {
//     console.log('clicked')
//     result.innerText = `${add(+a.value, +b.value)}`;
// })

// let addArrow = (a:number, b: number)=> a*b;

// let xyz : number = 5

// let aa;

// aa = '5'
// aa = 5
// aa = false

// let ab = '5'
// ab = 5,
// ab = true
// ab = 'Hello'

// let ac: any = 4
// ac = '4'
// ac = true

// let ad = true;

//Array

// let arr: number [] = [1,2,3,4]
// arr.push('a') // error
// arr.push(5)

// let str: Array<string> = ['a', 'b']

// let arr2 = [] //empty array

// let arr3: number[] = []; //empty correct way

// let arr4: readonly number[] = [1,2,3,4];

// arr4.push(8) // error

// arr4 = [10,20,30,10,40,50] //allowed

//Tuples

// let myTuple: [number,string];

// myTuple = [2,'Hello']

// myTuple.push('0','admin')

// console.log(myTuple)

// let myArray: [number,string][] = [] // Tuple arrays

// myArray.push([0,'Admin'])
// myArray.push([1,'User'])

// console.log(myArray)

// Enum

// enum Role {
//     User,
//     Admin
// }

// let currentUser: Role = Role.User
// // let currentUser = 0

// console.log(currentUser)

// currentUser = Role.Admin

// console.log(currentUser)

// console.log('-----------')

// const enum Role2 { //js de daha anlamlı çıktı
//     User,
//     Admin
// }

// let user2: Role2 = Role2.Admin
// let user3: Role2 = Role2.User

// enum Tshirt {
//     'Small' = 'S',
//     'Medium' = 'M',
//     'Large' = 'L',
//     'XL' = 100,
//     'XXL'
// }

// console.log(Tshirt.Small)
// console.log(Tshirt.XXL)

// enum StatusCodes {
//     NotFound = 404,
//     Success = 200,
//     Accepted = 202,
//     BadRequest = 400
// }

// const request: StatusCodes = StatusCodes.Success;
// console.log(request) ;   //200

//Unknown

// let notSure:unknown = 4;
// notSure = 'Hello';
// notSure = 100;

// let numVar: number = notSure as number

// let anyVar: any = notSure

// let anyVar2: any = 2

// numVar = anyVar2

//Void

// function add(n1: number, n2:number): void  {
//     console.log(n1+n2)
//     // return undefined
//     }

//     let result: number = add(2,5)
//     console.log(result)

//never

// function error(message: string): never{
//     throw new Error(message);

// }

// error('New Error')

// console.log(error('New Error'))

//Union

// let uVar: string | number = 0
// uVar = '0'
// uVar = true // error

// function checkNumber(n: (string | number)):string{
//     n.
//     if (typeof n === 'number'){
//         n.
//     }else {
//         n.
//     }
// }
