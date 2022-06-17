

let a = process.argv[2];

for(let i = 1; i <= a; i++) {
    console.log(i);
}

let b = process.argv[3];

for(let i = 1; i <= b; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let c = process.argv[4];

for(let i = c; i > 0; i--) {
        console.log(i);
    }
