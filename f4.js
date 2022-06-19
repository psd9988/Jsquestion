// check the given number is prime or not:

let a = 7;
let prime = true;
for(let i = 2; i < a; i++) {
 
    if(a % i === 0) {
      prime = false;
      break; 
    }

} if(prime){
  console.log(`${a} is prime`);
}else{
  console.log("not prime");  

}