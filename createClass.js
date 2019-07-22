
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


/* 
    HERE ALL THE EXECUTE FUNCTIONS
*/

function executeGetLength() {
    var theInput = document.getElementById('nameGetLength').value;
    let name = new Name(theInput.split(""));
    let getLength = document.getElementById('getLength').innerHTML = name.myGetLength();
}

function executeConcat() {
    var theInput = document.getElementById('theConcat').value;
    // var secondInput = document.getElementById('theSecondConcat').value;
    let name = new Name(theInput.split(""));
    let concatenated = document.getElementById('concatenate').innerHTML = name.concat(theInput);
    console.log(concatenated());
}

function executeInclude() {
    var theInput = document.getElementById('theName').value;
    var secondInput = document.getElementById('letterInclude').value;
    let name = new Name(theInput.split(""));
    let include = document.getElementById('includes').innerHTML = name.includes(secondInput);
}

function executeToLowerCase() {
    var theInput = document.getElementById('nameToLowerCase').value;
    let name = new Name(theInput.split(""));
    let ToLowerCase = document.getElementById('lowerCase').innerHTML = name.myToLowerCase();
}

function executeToString(){
    var theInput = document.getElementById('nameToString').value;
    let name = new Name(theInput.split("")); 
    let toString = document.getElementById('toString').innerHTML = name.myToString();
    console.log(toString);
}


function executeMyToUpperCase() {
    var theInput = document.getElementById('nameToUpperCase').value;
    let name = new Name(theInput.split(""));
    let toUpperCase = document.getElementById('toUpperCase').innerHTML = 'The UpperCase Version: ' + name.myToUpperCase();
}

function execute() {
    var theInputName = document.getElementById('name').value;
    let name = new Name(theInputName.split(""));
    var firstDelim = document.getElementById('firstLetter').value;
    var secondDelim = document.getElementById('secondLetter').value;
    // console.log(name.deleteString(getIndex(secondDelim), getIndex(firstDelim)));

    if(firstDelim > secondDelim) {
        var wrongStructure = document.getElementById('theDeletedString').innerHTML = "Bitte die Buchstaben drehen";
        console.error('Bitte drehe die Buchstaben');
    }else{
        var deleteIt = document.getElementById('theDeletedString').innerHTML = "Hier ist der neue Name: " + name.deleteString(getIndex(secondDelim), getIndex(firstDelim)); 
    }
}

function getIndex(delim) {
  var theInputName = document.getElementById('name').value;
  // document.write(theInputName);
  for(var i = 0; i <= theInputName.length; i++){
    if(theInputName[i] === delim) {
       return i;
    }
  }  
}

/* 
    HERE ALL THE METHODS
*/

function myToString() {
    let str = '';
    this.charArr.forEach((i) => {
        str += i;
    });
}

/* 
   Delete String
*/

function deleteString(stop, start = -1) {
    // console.log("param2: " + start);
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



/*
   Lenght of an Array
*/

function myGetLength() {
    let count = 0;
    while(this.charArr[count]){
        count++
    }
    return count;
}

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

let charac = 'hallo';
let substring = 'ha';

function myReplace (str) {
    let repStr;
    for (let i = 0; i < this.charArr.length; i++) {
        
    }
    
}

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



function deleteLetter(){
    var deleteLetter = document.getElementById("deleteLetter").value;
    console.log(deleteLetter);
}
