// Check if a number is Palindrome or not

let a = 1212121;
let rem;
let reverse = '';
for(let i = a; i>0;){
  rem = i%10;
  reverse = reverse + '' + rem;
  i = Math.floor(i/10);
}

if(a == reverse){
  console.log(`${a} is a palindrome`)
}
else{
  console.log(`${a} is not a palindrome`)
}