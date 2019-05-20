let theArray = [123, 22,33, 22, 11, 22, 11, 3, 1, 2, 22];

/* function bubble(arr){

    for(let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - i -1 ; j++) {
            
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j];
                arr[j + 1] = temp;
            }
            
        }
    }
} */

/* console.log(bubble(theArray)); */

let dupArray = [];
const finalArray = [];
let cnt = null; 


/* function pushArray(a1) {
   var all =  theArray.forEach(()=>{
       dupArray.push(a1);
    });
   return all;
} */
/*pushArray();*/
/* function pushArray(theArray){
     theArray.forEach((items)=>{
         dupArray.push(items);
     });
     return dupArray;
 }

 /*pushArray(theArray);*/

// 22: 3
// 11: 2


theArray.forEach((a1)=>{
    dupArray.forEach((a2)=>{
        if(a1 === a2) {
            finalArray.push(a2);
        }
    });
    dupArray.push(a1);
});



 
/*console.log(dupArray);*/
console.log(finalArray);

