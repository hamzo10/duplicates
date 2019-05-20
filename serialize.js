function addTask() {
    console.log(this);
    iterateThroughAllElements(selectAllInputElements());
}

function selectAllInputElements () {
    return document.querySelectorAll("input"); // unser Element "input"
}
debugger;
function iterateThroughAllElements (allInputElements) {
    let allElements = [];
    let element = {};
    for (let i = 0; i < allInputElements.length; i++) {
        switch(allInputElements[i].id){
            case "name":
                element.name = allInputElements[i].value;
                break;
            case "address":
                element.address = allInputElements[i].value;
                break;
            case "email":
                element.email = allInputElements[i].value;
                break;
            case "password":
                element.password = allInputElements[i].value;
                break;
        }

    }
    allElements.push(element);
    console.log(allElements);
}


