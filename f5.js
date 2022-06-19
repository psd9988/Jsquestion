

let a = 100;

for(let i = 1; i <= a; i++){
if(i % 15==0){
  console.log(`${i} Hello World`);
}
else if(i%5==0){
    console.log(`${i} World`);
  }
  else if(i%3==0){
    console.log(`${i} Hello`);
  }
  else{
    console.log(i);
  }
}
