let theArray = [123, 22, 123, 22, 11, 22, 11, 3, 1, 2, 22];

/* ich gebe durch das array
ich wähle jedes einzelne Element aus 
ich suche das kleinste Element
und stelle es an am anfang des Arrays */

function bubbleSort(array) {
    let swapped
    let n = theArray.length;

    do {
        swapped = false;
        for (let i = 0; i < n; i++) {
            if (array[i] > array[i+1]) {
                const temporary = array[i];
                /* console.log('eins: ',temporary); */
                array[i] = array[i+1];
                /* console.log('zwei',array[i+1]); */
                array[i+1] = temporary;
                /* console.log('drei', array[i+1]); */
                swapped = true;
            }
        }
    }

    while(swapped)

    return array;
    
}

let sorted = bubbleSort(theArray);
console.log(sorted);

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
            for (let i = 0; i < dupArray.length; i++) {
                const element = array[i];
                
            }
            while(swapped)
        }
    }
    
});
console.log('Ein guter Text: ', duplicateArray);
 
