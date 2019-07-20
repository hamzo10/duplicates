
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

// console.log("toString: " + name.myToString());
// console.log("deleteString: " + name.deleteString(4,1));
// console.log("toUpperCase: " + name.myToUpperCase());
// console.log("toLowercase: " + name.myToLowerCase());
// console.log("getLength: " + name.myGetLength());
// console.log("Includes: " , name.includes('mzah'));
//                             anotherName.includes('mzah');
// console.log("Concat " + name.concat('qazi, '));

function executeAll(){
    let getLength = name.myGetLength();
    
}

function execute() {
    var theInputName = document.getElementById('name').value;
    let name = new Name(theInputName.split(""));
  var firstDelim = document.getElementById('firstLetter').value;
    var secondDelim = document.getElementById('secondLetter').value;
    console.log('Second Index: ' + getIndex(secondDelim));
    console.log('Index: ' + getIndex(firstDelim));
    console.log(name.deleteString(getIndex(secondDelim), getIndex(firstDelim)));

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
