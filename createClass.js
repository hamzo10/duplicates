//TODO New Name soll String  Array
// EIne KLasse erstellen die zwei functionen//Konstruktoren hat und beim eingeben von einem String die die Function/Konstruktoren String ausführt und beim anderen function Array Function

function Name(charArr) {
    this.charArr = charArr;
    this.myToString = myToString;
    this.deleteString = deleteString;
    this.myToUpperCase = myToUpperCase;
    this.myToLowerCase = myToLowerCase;
    this.myGetLength = myGetLength;
    this.includes = includes;
    this.concat = concat;
}
// var name = new Name(nameArr);
let name = new Name(['h', 'a', 'm', 'z', 'a', 'h']);
console.log("toString: " + name.myToString());
console.log("deleteString: " + name.deleteString(4,1));
console.log("toUpperCase: " + name.myToUpperCase());
console.log("toLowercase: " + name.myToLowerCase());
console.log("getLength: " + name.myGetLength());
console.log("Includes: " , name.includes('mzah'));
console.log("Concat " + name.concat('qazi, '));


// onclick="wrapperFunction()"

// document.getElementById.onclick

// function wrapperFunction() {
//     let name .....
// }



/* 
Convert String into an Array
*/

// function names(name) {
//     for (let char = 0; char < name.length; char++) {
//         nameArr.push(name[char]);
//     }
//     /* console.log(nameArr); */
//     return nameArr;
// }

// console.log(names(character));
// names(character);

// console.log(name);

/* 
    ToString Method
*/


function myToString() {
    let str = '';
    this.charArr.forEach((i) => {
        str += i;
        // if(index != (nameArr + 1)) {
        //     str += ',';
        // };
    });
    // return str;
    document.write(str);
}

/* 
   Delete String
*/
// 8
function deleteString(stop, start = -1) {
    console.log("param2: " + start);
    if (start == -1) {
        start = stop
        stop++
    }
    let returnedArray = [];
    for (let i = 0; i < this.charArr.length; i++) {
        if (i == start) {
            i += stop - start - 1
            continue
        }
        returnedArray.push(this.charArr[i])
    }
    return returnedArray
}
// console.log(deleteString(4));

/*
   Lenght of an Array
*/

function myGetLength() {
    let count = 0;
    /*for (let i = 0; i < this.charArr.length; i++) {
        count++;
    }*/
    // let char;
    /*i+1 wird um eins hochgezählt, wenn zum Beispiel die i auf 0 ist dann wird es immer wieder auf 0 gezählt und dann wieder hoch auf 1
    i++ -> i = i+1;
    ++i Es wird erst hochgezählt dann überprüft*/ 
// While führt eine Leere Anweisung durch deshalb funktioniert es
    while(this.charArr[count]){
        count++
    }
    return count;
}

// console.log(name.getLength());

// console.log('The length is: ' + getLength());


/*
has Method
Idee:
Iteriere duch das Array 
Vergleiche ob das gegbene Wort gleich === dem gearde iterierende ist
wenn ein Whitespace kommt dann gruppiere die Buchstaben zu einem Wort

ich gehe jedes Element durch prüfe ob die Index von dem einem String zu dem andren glich ist solange 
*/


function includes(substring){
    let j = 0;
    let equal = false;
    let i;

    for(i = 0; i<this.charArr.length; i++){
        if(this.charArr[i] === substring[j]){
            j++;
            equal = true;
            if(j === substring.length){
                break;
            }
        }else{
            equal = false;
            i = i - j;
            j = 0;
        }

    }
    let index = 0;
    if(equal && j === substring.length){
        index = i - j +1;
        return index;
    }else{
        return -1;
    }
}


function concat (str) {
    let theStr = str + this.charArr;
    return theStr;
}


// function hasMethod(){
//     let text = 'Hallo was geht ich bin Hamzah und mag es zu coden.'
//     let dupText = 'Hallox'
//     let count = 0;
//     let isLetter;
//     for(let i = 0; i < text.length; i++){
//         if(text[i] === dupText[j]){
//            isLetter += dupText[j];
//             for(let j = 0; j < dupText.length; j++) {
//                 if(text[i] === dupText[j]){
//                     console.log(text[i]);
//                 }
//             }
//         }

//         if(count === dupText.length){
//             console.log
//             console.log(true);
//         }
//     }
// }

// hasMethod();

// console.log(textArr);
// console.log(textDupArr);


let charac = 'hallo';
let substring = 'ha';
// console.log(charac.indexOf(substring) !== -1);



/*
Replace Method
das CharArray wird iteriert
und die Sachen die ich replacen möchte werden über Indexen wie bei der delete Methode erst gelöscht und 
dann durch die neuen Indexen angegeben. 
*/

function myReplace (str) {
    let repStr;
    for (let i = 0; i < this.charArr.length; i++) {
        
    }
    
}


/* 
indexOf Method
*/


/*
include Method
*/


/*
To uppercase
*/


function myToUpperCase() {
    let newStr = '';
    for(let i = 0; i < this.charArr.length; i++){
        var thisCharCode = this.charArr[i].charCodeAt(0);
        if((thisCharCode >= 97 && thisCharCode <=122 || (thisCharCode >= 224 && thisCharCode <=225))) {
            newStr += String.fromCharCode(thisCharCode-32);
        }else{
            newStr += this.charArr[i];
        }
    }
    return newStr;
}


function myToLowerCase() {
    let newStr = '';
    for(let i = 0; i < this.charArr.length; i++){
        var thisCharCode = this.charArr[i].charCodeAt(0);
        if(thisCharCode >= 65 && thisCharCode <=90) {
            newStr += String.fromCharCode(thisCharCode+32);
        }else{
            newStr += this.charArr[i];
        }
    }
    return newStr;
}

function init() {

}


// console.log(toUpperCase('hallo'));

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