/*5) Transforme as funções desenvolvidas na questão 04 para usarem a técnica async/await
ao invés de só usar promises.*/

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function colocarTodasLetrasEmMaiusculoEm500ms(frase) {
  const erro = typeof frase != "string"
  try{
    await sleep(500);
    console.log(frase.toUpperCase())
  }catch(erro){
    console.log("PARÂMETRO REJEITADO!");
  } 
}

colocarTodasLetrasEmMaiusculoEm500ms("frase");

async function reverseString(frase) {
  const erro = typeof frase != "string"
  try{
    console.log(frase.split("").reverse().join(""))
  }catch(erro){
    console.log("PARÂMETRO REJEITADO!");
  }
}

reverseString("frase");
