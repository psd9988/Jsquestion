// Write a program to print all the digits of a number:-

let input = 554568;
let i = input;
let rem;
let reverse = '';
while(i>0){
  rem = i%10;
  reverse = reverse + '' + rem;
  i = Math.floor(i/10);
}

let n = reverse;
while(n>0){
  console.log(n%10)
  n = Math.floor(n/10)
}