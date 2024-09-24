//Parte 1 - Abaixo a função que multiplica dois números  em seu argumento 

function multiplicatorMachine(fator1:number, fator2:number) {
    const f1:number = fator1;
    const f2:number = fator2;

    return(f1*f2)
}

console.log(`O resultado da multiplicação é ${multiplicatorMachine(15, 25)}`)


//Parte 2 - Abaixo a função que executa a saudação

function oiMachine(nome:string) {
    const Saudacao:string = 'Olá';
    const Id:string = nome;

    return(Saudacao + Id);
}

console.log(oiMachine('Diógenes'))

//Nota: Optei por estas estruturas de função afim de dar destaque ao uso das tipagens.