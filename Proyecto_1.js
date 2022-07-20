const keysAndValues1 = {a:1,b:2,c:3};
const keysAndValues2 = {a:"Apple", b:"Microsoft", c:"Google"};
const keysAndValues3 = {key1:true, key2:false, key3:undefined};


//console.log(Object.keys(keysAndValues1));
//console.log(Object.values(keysAndValues1));

function proyecto1(arreglos) {
    console.log(Object.keys(arreglos));
    console.log(Object.values(arreglos));
}

/**
 * function proyecto1(arreglos) {
    console.log(Object.keys(arreglos) + ` ` + Object.values(arreglos));
}
 */

proyecto1(keysAndValues1);
proyecto1(keysAndValues2);
proyecto1(keysAndValues3);




/** 
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// arreglo como objeto
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// arreglo como objeto con nombres ordenados aleatoriamente
var an_obj = { 2: 'a', 100: 'b', 7: 'c' };
console.log(Object.keys(an_obj)); // console: ['2', '7', '100']

const an_keysAndValues1 = {8:1,5:2,1:3};
console.log(Object.keys(an_keysAndValues1));
*/
