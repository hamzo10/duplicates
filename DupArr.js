let theArray = [123, 22, 123, 22, 11, 22, 11, 3, 1, 2, 22];

/* ich gebe durch das array
ich wähle jedes einzelne Element aus 
ich suche das kleinste Element
und stelle es an am anfang des Arrays */


/* schleife durchläuft das Array über jedes Element
prüfen ob das Element an den verschiedenen Index vorhanden ist
    ist das Element 
wenn dies der Fall ist dann sollen die Element in ein neues Element gepusht werden 
ist dies nicht der Fall wird die Überprüfung verlassen und auf das nächste Element gesetzt
 */



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

        function sortIt(dupArray) {
            let swapped;
            do {
                swapped = false;
                for (let i = 0; i < dupArray.length; i++) {
                    if(dupArray[i] > dupArray[i+1]) {
                        const element = array[i];
                        array[i] = array[i+1];
                        array[i+1] = element;
                        swapped = true;
                    }
                }
            }
            while(swapped)
            return dupArray;
        }
    }
    
});
/* console.log('Ein guter Text: ', duplicateArray); */
console.log('Ein guter Text: ', sortIt(duplicateArray));
 
