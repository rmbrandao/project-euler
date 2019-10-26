let multiples = 0;
for (let index = 0; index < 1000; index++) {
    if ((index % 3) === 0 || ((index % 5) === 0)) {
        multiples += index;
    }
}

console.log(multiples);