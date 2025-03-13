import Student from "../model/student.js";

class DataService {

    constructor() {}

    // useResponse(response){
    //     const jsonPromise = response.json();

    //     jsonPromise.then((json) => console.log(json));

    //     jsonPromise.catch((error) => console.log(error));
    // }

    // handleError(response){
    //     console.log('brutta storia', response);
    // }

    async getStudentsData() {

        const studentsPromise =
        
        fetch("/assets/students.json")
        .then(resp => resp.json())
        .then(jsonData => {
            const students = this.createStudentsFromData(jsonData);
            console.log(students);
            return students; //puo metterci un po a farlo intatno fa return studentPromise
        })
        .catch(error => console.log(error));

        return studentsPromise;

        // const responsePromise = fetch("/assets/students.json");
        // responsePromise.then(this.useResponse);
        // responsePromise.catch(this.handleError);

        // const richData = this.addAge(data);

        // return richData;
    }

    getStudentsByAge() {
        return this.getStudentsData().then((students) => {
            const studentsClone = students.slice();
            studentsClone.sort((s1, s2) => s1.compareByAge(s2));
            return studentsClone;
        })
    }

    getStudentsByName() {
        return this.getStudentsData().then((students) => {
            const studentsClone = students.slice();
            studentsClone.sort((s1, s2) => s1.compareByName(s2));
            return studentsClone;
        })        
    }

    async getShuffledStudents(){
        const students = await this.getStudentsData();
        const studentsClone = students.slice();
        const shuffledStudent = this.shuffleArray(studentsClone)
        return shuffledStudent;
    }

    shuffleArray(array){
        // const newArray = array.slice();
        // newArray.sort(() => Math.random() - 0.5); //funziona per array piccoli
        // return newArray;

        const cloneArray = array.slice();
        const newArray = [];
        
        while(cloneArray.length > 0){
            const randomIndex = Math.round(Math.random() * (cloneArray.length - 1));

            const randomStudent = cloneArray[randomIndex];

            newArray.push(randomStudent);

            cloneArray.splice(randomIndex, 1);
        }

        return newArray;
    }

    createStudentsFromData(data){
        const students = [];

        for (let i = 0; i < data.length; i++) {
            const student = data[i];
            
            const newStudent = new Student(student.name, student.surname, student.yob, student.gender, student.nationality, student.marks);

            students.push(newStudent);
        }

        return students;
    }

    // addAge(studentArray){
    //     const newData = studentArray.map(student => {
    //         const now = new Date();
    //         const actualYear = now.getFullYear();
    //         const age = actualYear - student.yob;
    //         student.age = age;
    //         return student;
    //     })

    //     return newData;
    // }

}

export default DataService;