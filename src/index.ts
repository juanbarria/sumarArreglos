let arregloDimension: number = 6;
let vector1: number[] = new Array(arregloDimension);
let numero1: number;
for (let indice = 0; indice < arregloDimension; indice++) {
  numero1 = Number( prompt("Arreglo1: Indique el numero que desea incorporar en la posicion " + indice )  );
  vector1[indice] = numero1;
}

let vector2: number[] = new Array(arregloDimension);
let numero2: number;
for (let indice = 0; indice < arregloDimension; indice++) {
  numero2 = Number( prompt("Arreglo2: Indique el numero que desea incorporar en la posicion " + indice ) );
  vector2[indice] = numero2;
}

let sumaVector: number[] = new Array(arregloDimension);
for (let indice = 0; indice < arregloDimension; indice++) {
  sumaVector[indice] = vector1[indice] + vector2[indice];
}

console.log("la suma es " + sumaVector);