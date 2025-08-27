/*1.1 En base al siguiente javascript, crea variables en base a las propiedades
del objeto usando object destructuring e imprimelas por consola. Cuidado,
no hace falta hacer destructuring del array, solo del objeto.*/

const game = {title: 'The Last of Us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const {title, gender} = game;

console.log(title, gender);



/*1.2 En base al siguiente javascript, usa destructuring para crear 3 variables
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola.*/

const fruits = ['Banana', 'Strawberry', 'Orange'];
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);



/*1.3 En base al siguiente javascript, usa destructuring para crear 2
variables igualandolo a la función e imprimiendolo por consola.*/

//he cambiado name por animalname porque me salía tachado name, imagino que es porque es una palabra reservada?

const animalFunction = () => {
    return {animalname: 'Bengal Tiger', race: 'Tiger'} 
};

const {animalname, race} = animalFunction();
console.log (animalname,race);



/*1.4 En base al siguiente javascript, usa destructuring para crear las
variables name y itv con sus respectivos valores. Posteriormente crea
3 variables usando igualmente el destructuring para cada uno de los años
y comprueba que todo esta bien imprimiendolo.*/

//aquí por ejemplo si dejo solo name, me sale tachado en el console.log

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }
const {name, itv} = car;
const [year1, year2, year3] = itv;

console.log(name, year1, year2, year3);