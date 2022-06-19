let a = 6;
let total = 0;

for(let i = 1; i < a; i++){
  if(a%i==0){
    total = total + i;
  }
}
if(total == a){
  console.log(`${a} is a perfect number`)
}else{
  console.log(`${a} is not a perfect number`)
}