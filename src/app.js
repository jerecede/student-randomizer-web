import DataService from "./services/data-service.js";

const service = new DataService();

function orderByName(){
    const studentData = service.getStudentsByName();
    reder(studentData);
}

function orderByAge(){
    const studentData = service.getStudentsByAge();
    reder(studentData);
}

function shuffle(){
    const studentData = service.getShuffledStudents();
    reder(studentData);
}

window.orderByName = orderByName;
window.orderByAge = orderByAge;
window.shuffle = shuffle;

// //CREA DIV

// const container = document.getElementById('students-container');

// for (let i = 0; i < studentData.length; i++) {
//     const student = studentData[i];

//     //CREA DIV STUDENTE E ASSEGNA CLASSE

//     const studentContainer = document.createElement('div');
//     studentContainer.classList.add('student-container');

//     //CREA H3 name DA METTERE DENTRO DIV

//     const nameContainer = document.createElement('h3');
//     // nameContainer.style.color = 'red';
//     const nameNode = document.createTextNode(student.name + ' ' + student.surname); //aggiunge text
//     nameContainer.appendChild(nameNode);
//     studentContainer.appendChild(nameContainer);

//     //CREA SPAN nationality DA METTERE DENTRO DIV

//     const countryContainer = document.createElement('span');
//     const countryNode = document.createTextNode('Nazionalità: ' + student.nationality); //aggiunge text
//     countryContainer.appendChild(countryNode);
//     // const countryContainer = document.createElement('span');
//     // countryContainer.innerText = 'Nazionalità: ' + student.nationality; //innerText innerHTML textContent
//     studentContainer.appendChild(countryContainer);
//     container.appendChild(studentContainer);

// }

function reder(studentsData) {
    const container = document.getElementById('students-container');

    container.innerHTML = ''; //pulisce ogni volta la pagina

    for (let i = 0; i < studentsData.length; i++) {
        const student = studentsData[i];

        const studentContainer = document.createElement('div');
        studentContainer.classList.add('student-container');

        const nameContainer = createTextElement('span',student.name + ' ' + student.surname, 'name-container');

        // const nameContainer = document.createElement('span');
        // nameContainer.classList.add('name-container');
        // const nameNode = document.createTextNode(student.name + ' ' + student.surname);
        // nameContainer.appendChild(nameNode);

        const countryContainer = createTextElement('span','Nazionalità: ' + student.nationality);

        // const countryContainer = document.createElement('span');
        // countryContainer.classList.add('country-container'); //non serviva
        // const countryNode = document.createTextNode('Nazionalità: ' + student.nationality);
        // countryContainer.appendChild(countryNode);

        const genderContainer = createTextElement('span','Gender: ' + student.gender);

        // const genderContainer = document.createElement('span');
        // genderContainer.classList.add('gender-container'); //non serviva
        // const genderNode = document.createTextNode('Gender: ' + student.gender);
        // genderContainer.appendChild(genderNode);

        const ageContainer = createTextElement('span','Age: ' + student.getAge());

        // const ageContainer = document.createElement('span');
        // ageContainer.classList.add('age-container'); //non serviva
        // const ageNode = document.createTextNode('Age: ' + student.getAge());
        // ageContainer.appendChild(ageNode);

        studentContainer.appendChild(nameContainer);
        studentContainer.appendChild(countryContainer);
        studentContainer.appendChild(genderContainer);
        studentContainer.appendChild(ageContainer);

        container.appendChild(studentContainer);
    }
}

function createTextElement(elementTag, text, nameClass = null){
    const element = document.createElement(elementTag);

    const node = document.createTextNode(text);

    if(nameClass){
        element.classList.add(nameClass);
    }

    element.appendChild(node);

    return element;
}

