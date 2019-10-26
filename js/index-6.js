let quadSum = 0;
let quadSumResult = 0;
let sumQuad = 0;

for (let index = 0; index <= 100; index++) {
    sumQuad += Math.pow(index, 2);
    quadSum += index;
    quadSumResult = Math.pow(quadSum, 2);
}

console.log(quadSumResult);
console.log(sumQuad);

console.log(quadSumResult - sumQuad);