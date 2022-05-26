let arreglo : number = 6;
let vector1 : number [] = [1,3,7,9,9,5];
let vector2 : number [] = [6,9,2,5,9,4];
let sumaVector : number [] = new Array (arreglo);
let indice : number;
for (indice=0 ; indice < arreglo; indice ++) {
  sumaVector[indice] = vector1[indice] + vector2[indice] ; 
};

console.log ("la suma es"  +sumaVector);