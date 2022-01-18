////////Array Methods-find and findInddex

let numbers = [5,55,67,68,68,];
const evennumbers = (value, index,array) =>
{
    if(value %2===0)
    return value;
}
let firstEvenNumbers = numbers.find(evennumbers);
let firstEvenNumbersIndex = numbers.findIndex(evennumbers);
console.log(firstEvenNumbers);
console.log(firstEvenNumbersIndex); 


///// string methods - startwith, endwith, includes

  const text = " Today i am really happpy ";
  console.log(text.startsWith('Today'));


  const text = " Today i am really happy ";
  console.log(text.endsWith('happy'));

  const text = " Today i am really happy ";
  console.log(text.includes('happy'));