let theArray = [123, 22, 123, 22, 11, 22, 11, 3, 1, 2, 22];

/* schleife durchläuft das Array über jedes Element
prüfen ob das Element an den verschiedenen Index vorhanden ist
    ist das Element 
wenn dies der Fall ist dann sollen die Element in ein neues Element gepusht werden 
ist dies nicht der Fall wird die Überprüfung verlassen und auf das nächste Element gesetzt
 */


/* const duplicateArray = [];
theArray.forEach((searchItem) => {
    var count = 0;
    theArray.forEach((duplicateCheckItem) => {
        
        if (searchItem === duplicateCheckItem) {
            console.log(duplicateCheckItem);
            count++;
        }
            
        if(count > 1){
            duplicateArray.push(searchItem);
            console.log('Ein guter Text: ', duplicateArray);
        }

    })
}); */

const duplicateArray = [];

theArray.forEach((searchItem) => {
    var count = 0;
    theArray.forEach(function(duplicateCheckItem) { 
        if (searchItem === duplicateCheckItem) {
            /* console.log(duplicateCheckItem); */
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
    
});
console.log('Ein guter Text: ', duplicateArray);






/* let dupArray = [123];
const finalArray = [];
let cnt = null; 

theArray.forEach((a1)=>{
    console.log('Zahlen von theArray: ' + a1)
    dupArray.forEach((a2)=>{
        console.log('Zahlen von dupArray: ' + a2);
        if(a1 === a2) {
            finalArray.push(a2);
        }
    });
    dupArray.push(a1);
});


 
console.log(dupArray);
console.log(finalArray);
 */
