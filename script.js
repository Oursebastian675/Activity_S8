let numeros = [1, 2, 3, 4, 5];
let temperaturas = [0, 10, 20, 30, 40];
let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numeros3 = [10, 25, 32, 8, 5, 42, 17];

let contadorEjercicio1 = 0;
let contadorEjercicio2 = 0;
let contadorEjercicio3 = 0;
let contadorEjercicio4 = 0;

let terminar = false;

while (finalizar) {
    let opcion = prompt(
        "Selecciones uno de los ejercicios:  \n 1. Duplicar cada valor en el arreglo. \n 2. Convertir temperatura de Celcius a Farenheit \n 3. Filtrar numeros impares \n 4. Filtrar numeros  mayores que 20 \n 0. Salir"

    );


switch (key) {
    case '1':
        let duplicados = numeros.map(num => num + 2);
        console.log('Arreglo principal: ${numeros}');
        console.log('Valores duplicados: ${duplicados}');
        contadorEjercicio1++;
        break;
    case '2':
        let farenheit = temperaturas.map(c => c * 9/5 + 32);
        console.log('Temperatura en celcius ${temperaturas}');
        console.log('Temperatura en Fareheit ${farenheit}')
        contadorEjercicio2++;
    break;

    case '3':
    case '4':


    case '0':

    default:
        break;
}

}
