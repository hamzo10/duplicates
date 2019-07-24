function hasMethod(){
    let text = 'Hallo was geht ich bin Hamzah und mag es zu coden.'
    let dupText = 'Hallox'
    let count = 0;
    let isLetter;
    for(let i = 0; i < text.length; i++){
        for(let j = 0; j < dupText.length; j++) {
            if(text[i] === dupText[j]){
                isLetter += dupText[j];
                console.log(isLetter);
            }
        }
        if(count === dupText.length){
            
            console.log(true);
        }
    }
}

hasMethod();

// console.log(textArr);
// console.log(textDupArr);

