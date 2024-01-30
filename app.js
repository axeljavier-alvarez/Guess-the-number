//Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
// let intentos = 0
// let palabraVeces = 'vez';
// maximo intentos
let maximosIntentos = 3;



console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`));

    console.log(typeof(numeroUsuario));
    // INTENTOS AFUERA DEL IF PORQUE HAY VARIOS INTENTOS Y SI NO HACIERTA SIGUE
   // intentos = intentos + 1;

    if (numeroUsuario == numeroSecreto) {
        //Acertamos, forma abreviada de if ? y de else :
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
    } else {


        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        } 
        //Incrementamos el contador cuando no acierta

        // CONTADORES JAVASCRIPT
       // intentos = intentos + 1;
       // intetos += 1
       intentos ++;

        // lleva un orden y si son mas de 1 intento mostrara la palabra veces
        // palabraVeces = 'veces';

        // DECLARAR LA VARIABLE EN EL IF
        if(intentos > maximosIntentos){
            alert(`Llegaste al numero mayor de intentos ${maximosIntentos} intentos` );
            break;
        }
        //La condición no se cumplió
        // alert('Lo siento, no acertaste el número');
    }
}