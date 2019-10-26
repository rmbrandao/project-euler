function fatorial(n)
    Fatorial = 1
    for i=1,n do
        Fatorial = Fatorial * i;
    end

    return Fatorial;
end

function resolverBinomioNewton(n, k)
    BinNewton = 0

    BinNewton = fatorial(n) / (fatorial(k) * fatorial(n - k));

    return BinNewton;
end

function trianguloPascal(n)
    triangulo = ''
    for i=0,n do
        for j=0,i do
            triangulo = triangulo .. ' ' .. resolverBinomioNewton(i, j)
        end
        print(triangulo)
        triangulo = ''
    end
end

trianguloPascal(10)