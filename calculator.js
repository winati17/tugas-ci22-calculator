const operation = (a,b) => {
    const penjumlahan = a + b;
    const pengurangan = a - b;
    const perkalian = a * b;
    const pembagian = a / b;

    let maxOperation = penjumlahan;
    if (pengurangan > maxOperation){
        maxOperation = "pengurangan";
    } else if(perkalian > maxOperation){
        maxOperation = "perkalian";
    } else if(pembagian > maxOperation){
        maxOperation = "pembagian";
    } else maxOperation = "penjumlahan";

    console.log (`${a} + ${b} =`, a+b);
    console.log (`${a} - ${b} =`, a-b);
    console.log (`${a} x ${b} =`, a*b);
    console.log (`${a} / ${b} =`, a/b);
    console.log (`Hasil operasi terbesar = ${maxOperation}`);
}

operation(16,1)
