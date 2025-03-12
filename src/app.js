import DataService from "./services/data-service.js";

const service = new DataService();

const studentData = service.getStudentsData();

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

studentData.sort((s1, s2) => {
    if (s1.name < s2.name) {
        return -1;
    }
    if (s1.name > s2.name) {
        return 1;
    }
    return 0;
});

const container = document.getElementById('students-container');

for (let i = 0; i < studentData.length; i++) {
    const student = studentData[i];

    const studentContainer = document.createElement('div');
    studentContainer.classList.add('student-container');

    const nameContainer = document.createElement('span');
    nameContainer.classList.add('name-container');
    const nameNode = document.createTextNode(student.name + ' ' + student.surname);
    nameContainer.appendChild(nameNode);

    const countryContainer = document.createElement('span');
    countryContainer.classList.add('country-container');
    const countryNode = document.createTextNode('Nazionalità: ' + student.nationality);
    countryContainer.appendChild(countryNode);

    const genderContainer = document.createElement('span');
    genderContainer.classList.add('gender-container');
    const genderNode = document.createTextNode('Gender: ' + student.gender);
    genderContainer.appendChild(genderNode);

    const now = new Date();
    const year = now.getFullYear();
    const age = year - student.yob;
    const ageContainer = document.createElement('span');
    ageContainer.classList.add('age-container');
    const ageNode = document.createTextNode('Age: ' + age);
    ageContainer.appendChild(ageNode);

    studentContainer.appendChild(nameContainer);
    studentContainer.appendChild(countryContainer);
    studentContainer.appendChild(genderContainer);
    studentContainer.appendChild(ageContainer);

    container.appendChild(studentContainer);
}

