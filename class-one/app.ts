/* Author: Mateus leonardo
   Date: 07/07/2021
*/

// =========== TYPE ANNOTATION ========== //

// ===> Variables
let mensage: string = 'Mateus';
console.log(mensage);

// ===> Arrays
let person: string[] = ['Mateus', 'Luca', 'Vini'];
console.log(person[1]);

// ===> Object
let student:{
    name: string;
    age: number;
    class: number;
};

student = { name: 'Mateus', age: 21, class: 2}
console.log(student);

// ===> Function
function multNum(num1: number, num2:number){
    return num1 * num2;
}

console.log(multNum(4,20));
