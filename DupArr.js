/* 
    Hier erstelle ich ein Palindromchecker das Wort wird in den Parameter 'str'
    eingeben und die for Schleife durchläuft dann das Wort
    da das Word dekremntiert wird, wird der letze Buchstabe genommen und
    in die Varaibale reversed eingetragen
*/

function reverse(str) {
    let reversed = '';
    for(let i = str.length-1; i >= 0; i--){
        reversed += str[i];
        console.log(reversed);
    }
    if(reversed === str) {
        console.log(reversed + ' word is a palindrome');
    }else{
        console.log(reversed + ' word is not a plaindrom');
    }
 
    return reversed;
}

reverse('word');

/* 
    schleife durchläuft das Array über jedes Element
    prüfen ob das Element an den verschiedenen Index vorhanden ist
    ist das Element 
    wenn dies der Fall ist dann sollen die Element in ein neues Element gepusht werden 
    ist dies nicht der Fall wird die Überprüfung verlassen und auf das nächste Element gesetzt
 */
let theArray = [123, 22, 123, 22, 11, 22, 11, 3, 1, 2, 22];

const duplicateArray = []; 

theArray.forEach((searchItem) => {
    var count = 0;
    theArray.forEach(function(duplicateCheckItem) { 
        if (searchItem === duplicateCheckItem) {
            count++;
        }
    })
    if(count > 1){
        let isContaining = false;
        duplicateArray.forEach(function(duplicateCheckItem) {
            if (searchItem === duplicateCheckItem) {
                isContaining = true;
            }
        });  
        if (!isContaining) {
            duplicateArray.push(searchItem);
        }  

    }
    /* console.log('Ein guter Text: ', sortIt(duplicateArray)); */
});


/* 
    ich gebe durch das array
    ich wähle jedes einzelne Element aus    
    ich suche das kleinste Element
    und stelle es an am anfang des Arrays 
*/

function sortIt(dupArray) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < dupArray.length; i++) {
            if(dupArray[i] > dupArray[i+1]) {
                const element = dupArray[i];
                dupArray[i] = dupArray[i+1];
                dupArray[i+1] = element;
                swapped = true;
            }
        }
    }
    while(swapped)
    return dupArray;
}
/* console.log('Ein guter Text: ', duplicateArray); */
console.log('Ein guter Text: ', sortIt(duplicateArray));
 
