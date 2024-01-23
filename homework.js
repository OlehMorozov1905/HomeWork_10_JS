let res = sumDigits(1234);
console.log(`sum digits = ${res}`); // 10
res = luckyNumber(123871); // 1 + 3 + 7 === 2 + 8 + 1
console.log(res ? 'Lucky' : 'Unlucky'); // Lucky

function sumDigits(a) {
    let res = 0;
    while (a !== 0) {
        let digit = a % 10;
        a = a / 10 | 0;
        res += digit;
    }
    return res;
}

function luckyNumber(a) {
    let res1 = 0;
    let res2 = 0;
    let pos = 1;
    while (a !== 0) {
        let digit = a % 10;
        a = a / 10 | 0;
        if (pos % 2 === 0) {
            res1 += digit;
        } else {
            res2 += digit;
        }
        pos++;
    }
    return res1 === res2;
}