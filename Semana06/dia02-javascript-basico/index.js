console.log('Hola Javascript denuevo')

console.log('Hola Javascript');
//Esto es un ocmentario 

/*
Esto es un
comentario
mas
largo
*/

//tipos de datos

//undefined

let nombre;
console.log(nombre);
console.log(typeof nombre);

//null
let apellido = null;
console.log(apellido);
console.log(typeof apellido);

//bollean -> false  o true
const descuento = false;
console.log(descuento);
console.log(typeof descuento);
//number

const number1 = 20;
const number2 = 20.50;
const number3 = -36;

console.log(typeof number1);
console.log(typeof number2);
console.log(typeof number3);
//string
const alumna ='Mylene';

const alumno ="Mylene";

const numero = '20';

console.log(typeof alumna);
console.log(typeof alumno);
console.log(typeof numero);

//object
//fuction
//bigint
//symbol


/*
Variables y constantes

var -> ES5
const, let -> ES6 (lo recomentable)
*/

const edad = 55;

console.log(edad);

let edad2 = 24;
edad2 = 18;
//cosole.log(edad2);
//operadores matematicos

console.log(1+2);
console.log(3-2);
console.log(2*2);
console.log(1/2);
console.log(1%2); //residuo
console.log(2**2);

//operadores de asignación

//operadores de igualdad no estricta

1==1
1=='1'
1!=1

//operadores de iguald estricta recomendable

1===1
1==='1'
1!==1

//otros operadores, siempre devueve un boolean

8 > 5
8 >= 5
8 < 1
8 <= 1

//operadores lógicos (and, or, negación)

true && false //and
true || false //or
!false //negacion 

//operador de cadena (concatenación)

const saludo = 'Hola, '

const nombrecompleto = 'Liliana' + ' ' + 'Huaman'

const saludoAmigo = saludo + nombrecompleto

console.log(nombrecompleto)

console.log(saludoAmigo)

//operador ternario

const edad1 =24
const soyMayorOmenor = edad1 > 18 ? 'mayor': 'menor';

console.log(soyMayorOmenor)

//EJERCICIOS

// 1. Retorna True si  dos strings tienen la misma longitud sino devolver False

let cadena1 ='hola'
let cadena2 = 'niko'

let caracteres = cadena1.length  === cadena2.length ? true : false

console.log(caracteres)

// 2. Retornar True si un numero es menor que 40 sino devolver False

let numero3 = 35;

let Menor40 = numero3 < 40 ? true : false;

console.log(Menor40)

// 3. Retornar True si un numero es menor que 60 sino devolver False

let numero4 = 35;

let Menor60 = numero4 < 60 ? true : false;

console.log(Menor60)
// 4. Retornar True si un numero es par sino devolver False

let numero5 = 25;

let par = numero5 % 2 === 0 ? true : false;

console.log(par)

// 5. Retornar True si un numero es impar sino devolver False

let numero6 = 25;

let impar = numero6 % 2 !== 0 ? true : false;

console.log(impar)

// 6. calcular el area de un triangulo y mostrar su resultado si tenemos los balseres base y altura

const base = 3
const altura = 6

console.log((base * altura)/2)


//condicionales 


if (true){
  //verdadero
}

const esPar = true;

if(esPar)
{
  console.log('este número es par')
}


if(esPar)
{
 console.log('este número es par')
}
else
{
  console.log('este número es impar')
}
    

const heroe = 'Superman'

if(heroe ==='Batman')
  {
    console.log('soy Batman')
  }
else if (heroe ==='Spiderman')
  {
    console.log('soy Spiderman')
  }
else if (heroe ==='Iroman')
  {
    console.log('soy Iroman')
  } 
else 
  {
    console.log('No soy un heroe aun')   
  }



switch (heroe)
  {
    case 'Batman':
      console.log('soy Batman')
    break
    
    case 'Spiderman':
      console.log('soy Spiderman')
    break
    
    case 'Iroman':
      console.log('soy Iroman')
    break
    
    default:
      console.log('No soy un heroe aun')  
  }


//estruturas repetitivas

//for

for(let i = 0; i<10; i++)
  {
    //console.log(i)  
  }


//while

let j = 0

while (j < 10)
  {
    //console.log(j) 
    j++;
  }

//do while

let k = 0

do {
  //console.log(k)
  k++
}while (k<10)


//EJERCICIOS
  
// 1. Determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'
let edad5 =20
  
  if(edad5<18)
{
 console.log('Menor de edad')
}
else
{
  console.log('Mayor de Edad')
}

// 2. Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki'
let idioma = 'español'

switch (idioma)
  {
    case 'español':
      console.log('Hola')
    break
    
    case 'inglés':
      console.log('Hello')
    break
    
    case 'aimara':
      console.log('kamisaraki')
    break
    
    default:
      console.log('idioma no registrado')  
  }

// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número
let numero11 = 7
  
if(numero11%3 ===0 && numero11 % 5 ===0)
{
 console.log('fizzbuzz')
}
else if(numero11%3 === 0)
{
  console.log('Fizz')
}
else if(numero11%5 === 0)
{
  console.log('buzz')
}
else
  {
    console.log(numero11)
  }

// 4. REtornar true si un numero es primo sino devolver false
//    Pista: un numero primo es divisible por sí mismo y por 1

let numero12 = 7
let contador = 0
  
for(let x =1; x <= numero12; x++)
  {
    if(numero12%x ===0)
      contador++
  }

//console.log(contador)
console.log(contador > 2 ? false : true) 

// 5. Devolver un valor que se incremente de dos en dos y devuelva los menores a 10

let a = 0

for(let a = 0; a<10; a+=2)
  {
    console.log(a)  
  }


//funciones

const miNombre = 'Liliana'

//definiendo una funcion sin parametros
function nombreDeLaFuncion()
{
  
}

//funciones con parametros
function imprimirMiNombre(nombre,apellido)
{
  console.log('Hola soy ' + nombre +' '+apellido)
}

imprimirMiNombre('Liliana','Huaman');


//ejercicios
  
// 1. Determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'
let edad6 =18
  
function EsMayorOMenor(edad){
  if(edad<18)
{
 console.log('Menor de edad')
}
else
{
  console.log('Mayor de Edad')
}
}

//EsMayorOMenor(edad6)


//funciones con retorno de valor


let edad7 =22
  
function EsMayorOMenor2 (edad){
  if(edad<18)
{
  return 'Menor de edad'
}
else
{
  return 'Mayor de edad'
}
}

console.log('---------')

const resultado = EsMayorOMenor2 (edad7)

console.log(resultado)










