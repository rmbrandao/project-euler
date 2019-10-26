function fatorial(n) {
    let fatorial = 1;
    for (let i = 1; i <= n; i++) {
        fatorial = fatorial * i;
    }

    return fatorial;
}

function resolverBinomioNewton(n, k) {
    let BinNewton;

    BinNewton = fatorial(n) / (fatorial(k) * fatorial(n - k));

    return BinNewton;
}

function trianguloPascal(n) {
    let triangulo = '';
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= i; j++) {
            triangulo += ' ' + resolverBinomioNewton(i, j);
        }
        console.log(triangulo);
        triangulo = '';
    }
}

trianguloPascal(10);