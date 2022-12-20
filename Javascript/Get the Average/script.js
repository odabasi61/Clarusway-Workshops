const num = Number(prompt("Enter a number"))
let total = 0;
let repeat = 0;


for (let i = 1; i <= num; i++)
{
    const randomNum = Math.trunc(Math.random() * 10) + 1;
    total = total + randomNum;
    repeat = repeat + 1;
    // console.log(`${i}. random number: ${randomNum}`)
    // console.log(total, repeat)
}
console.log(`The total of the numbers you entered is ${total} and the average is ${total / repeat}`)

