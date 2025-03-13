import DataService from "./services/data-service.js";

const service = new DataService();

function orderByName(){
    service.getStudentsByName().then(studentData => reder(studentData));
}

function orderByAge(){
    const studentPromise = service.getStudentsByAge();
    studentPromise.then(studentData => reder(studentData));
}

async function shuffle(){
    const studentData = await service.getShuffledStudents();
    reder(studentData);
}

function getStudents(){
    const studentPromise = service.getStudentsData();
    studentPromise.then(studentData => reder(studentData));
}

window.orderByName = orderByName;
window.orderByAge = orderByAge;
window.shuffle = shuffle;
window.getStudents = getStudents;

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

        const countryContainer = createTextElement('span','Nazionalità: ' + student.nationality);

        const genderContainer = createTextElement('span','Gender: ' + student.gender);

        const ageContainer = createTextElement('span','Age: ' + student.getAge());

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

