let small = 1;
let para = false;
while(!para) {
    if((small % 1) === 0 && (small % 2) === 0 && (small % 3) === 0 && (small % 4) === 0 && (small % 5) === 0
     && (small % 6) === 0 && (small % 7) === 0 && (small % 8) === 0 && (small % 9) === 0 && (small % 10) === 0
     && (small % 11) === 0 && (small % 12) === 0 && (small % 13) === 0 && (small % 14) === 0 && (small % 15) === 0
     && (small % 16) === 0 && (small % 17) === 0 && (small % 18) === 0 && (small % 19) === 0 && (small % 20) === 0) {
         para = true;
         break;
     }
     small++;
}

console.log(small);