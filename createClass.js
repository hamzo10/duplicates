
let nameArr = [];
function Name (charac) {
    this.name = charac;
}
var name = new Name(nameArr); 

/* 
Convert String into an Array
*/

let character = 'Hamzah';

function names(name) {
    for (let char = 0; char < name.length; char++) {
        nameArr.push(name[char]);
    }
    /* console.log(nameArr); */
    return nameArr;
}

console.log(names(character));

console.log(name);

/* 
    ToString Method
*/

function toString (letter) {
    let str = '';
        nameArr.forEach((i) => {
            str += i;
            // if(index != (nameArr + 1)) {
            //     str += ',';
            // };
        });
    return str;
}
 console.log(toString(nameArr));


 /* 
    Delete String
 */

 function deleteString (arr) {
    for (let letter = 0; letter < nameArr.length; letter++) {
        let start = nameArr[i];
        let stop = nameArr[i];
        if() {

        }

    }
 }
 console.log(deleteString(nameArr));

 /*
    Lenght of an Array
 */

 function getLength() {
     for () {

     }
 }
 

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 'Hallo'];
//let arr3 = [];
// for (let i = 0; i < arr1.length; i++) {
//     arr3.push(arr1[i]);
//     /* console.log(arr3); */
// }
// for (let j = 0; j < arr2.length; j++) {
//     arr3.push(arr2[j])
//     /* console.log(arr3); */
// }


// console.log(arr3);
// console.log(arr3[9] + ' ich bin Hamzah ich bin ' + arr1[1] + arr1[2] + ' Jahre alt');

