const path = require('path');
const fs = require('fs');
const _ = require('lodash');

var map = new Map();

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('style.css', {
        encoding: 'utf-8'
    })
});
// { 
lineReader.on('line', function (line) {
    if(line.indexOf(".") === 0){
        let wordsArray = line.split(" ");
        wordsArray.forEach(element => {
            var theWordArray = _.without(element.split(""), ".", "{").join("")
            if(theWordArray === ""|| theWordArray === '\n'){
                   
            }else{
                var mapped = map.set(theWordArray, 0);
                console.log(mapped);
            }
            
            // map1.set(element,0)
        });
        
    }
});



