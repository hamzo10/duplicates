let allElements = [];

function addTask(e) {
    e.preventDefault();
    console.log(e);
    iterateThroughAllElements(selectAllInputElements());

    createElement();
}

function selectAllInputElements () {
    return document.querySelectorAll("input"); // unser Element "input"
}
//TODO Review

function theIterateValues() {
    return selectAllInputElements[i].value;
}

// Wie kann ich redundanten Code schöner und effizienter schreiben

function iterateThroughAllElements (allInputElements) {
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
    let myJSON = JSON.stringify(allElements);
    console.log(allElements);
    console.log(myJSON);
}

function createElement() {

    let containerDiv = document.getElementById('personDataList');

    while(containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
    }

    // Wie kann ich redundanten Code schöner und effizienter schreiben

    for (let i = 0; i < allElements.length; i++) {
        let personPara = document.createElement('p');
        personPara.innerText = allElements[i].name;
        let personParaAddress = document.createElement('p');
        personParaAddress.innerText = allElements[i].address;
        let personParaEmail = document.createElement('p');
        personParaEmail.innerText = allElements[i].email;
        let personParaPass = document.createElement('p');
        personParaPass.innerText = allElements[i].password;
        let divider = document.createElement('hr');

        containerDiv.append(personPara, personParaAddress, personParaEmail, personParaPass, divider);
    }

    /*
    let newText = document.createTextNode(allElements[i].);
    personName.appendChild(newText);

    let currentDiv = document.getElementById('personDataList');
    document.body.insertBefore(personName, currentDiv);

    for(let i = 0; i < allElements.length; i++) {

    }
     */
}
