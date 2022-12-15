/*4) Escreva duas funções arrow usando a técnica de promises (Javascript ES6). A primeira
função, colocarTodasLetrasEmMaiusculoEm500ms, receberá um único parâmetro e o
colocará em maiúsculo depois de 500 milisegundos. Verifique, dentro da função, se o
parâmetro se trata de um tipo String. Se o parâmetro não for do tipo String, a promise deve
rejeitar o parâmetro. A segunda função, inverteTodasLetras(), realizará uma inversão das
letras da String. Atenção: você deverá utilizar encadeamento de funções.*/

function colocarTodasLetrasEmMaiusculoEm500ms(frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof frase != "string") {
        console.log("PARÂMETRO REJEITADO!");
      }
      else {
        resolve(frase.toUpperCase());
      }
    } ,500)
  })
}

colocarTodasLetrasEmMaiusculoEm500ms("uma frase").then(console.log).catch(console.error);

function reverseString(frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof frase != "string") {
        console.log("PARÂMETRO REJEITADO!");
      }
      else {
        resolve(frase.split("").reverse().join(""));
      }
    }, 0)
  })
}

reverseString("uma frase").then(console.log).catch(console.error)
