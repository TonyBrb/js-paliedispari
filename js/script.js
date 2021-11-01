const parolaInserita = prompt('Inserisci una parola');

const risultato = palindroma(parolaInserita);
console.log(risultato);

function palindroma(parola){
  let contatore = 0;
  const parolaAlContrario = [];
  for(let i = 0; i < parola.length; i++){
    parolaAlContrario[i] = parola[(parola.length - 1) - i];
  }
  for(let j=0; j < parola.length; j++){
    if(parola[j] == parolaAlContrario[j]) contatore++;
  }

  if(contatore == parola.length) return 'è palindroma';
  else return 'non è palindroma';
  
}

//Pari o dispari

const pariODispari = prompt('pari o dispari?');
const numUtente = parseInt(prompt('inserisci un numero da 1 a 5'));
const numPc = generaNumeroRandom();
console.log('hai scelto',pariODispari);
console.log('numUtente',numUtente);
console.log('numPc',numPc);
const result = sommaNumeri(numUtente, numPc);
console.log('Risultato:',result);

if(pariODispari ===  result) console.log('hai vinto');
else console.log('hai perso');


function generaNumeroRandom(){
  let numPc = 0;
  numPc = Math.floor((Math.random() * 5) + 1);
  return numPc;
}

function sommaNumeri(num1,num2){
  let somma = num1 + num2;
  console.log('Resto', (somma % 2));
  if(somma % 2 == 0) return 'pari';
  else return 'dispari';
}