/*2) Imprima os seguintes campos usando o operador de desestruturação: autor - CEP -
cidade (lat, lng). Imprima usando o recurso Template String.
Saída esperada: Demetrio Mestre - 581415-145 - Campina Grande (13.51, 52.54)*/

const usuario= {
    "autor": 'Demetrio Mestre',
    "endereco": {
    "rua": "Rua Qualquer",
    "suite": "JS",
    "cidade": "Campina Grande",
    "CEP": "581415-145",
    "geo": {
    "lat": "13.51",
    "lng": "52.54"
    }
    }
    }

    const {autor:nome}=usuario;
    const {endereco: {rua,suite,cidade,CEP}}= usuario;
    const {endereco: {geo:{lat, lng}}} = usuario;

    const resultado = `${nome} - ${CEP} - ${cidade} (${lat},${lng})`;
    console.log(resultado);