import Student from "../model/student.js";

class DataService {

    constructor() {

    }

    getStudentsData() {
        const data = [
            {
                "name": "Lorenzo",
                "surname": "Puppo",
                "gender": "Male",
                "marks": [
                    7,
                    10,
                    7
                ],
                "yob": 1995,
                "nationality": "Italy"
            },
            {
                "name": "Jan",
                "surname": "Stigliani",
                "gender": "Male",
                "marks": [
                    8,
                    9,
                    7
                ],
                "yob": 2000,
                "nationality": "Italy"
            },
            {
                "name": "Hugo Alexander",
                "surname": "Martinez Rivas",
                "gender": "Female",
                "marks": [
                    9,
                    9,
                    10
                ],
                "yob": 1994,
                "nationality": "El Salvador"
            },
            {
                "name": "Jeremias Emmanuele",
                "surname": "Cedeno Giler",
                "gender": "Male",
                "marks": [
                    8,
                    9,
                    10
                ],
                "yob": 2003,
                "nationality": "Ecuador"
            },
            {
                "name": "Giovanni",
                "surname": "Sussarellu",
                "gender": "Male",
                "marks": [
                    8,
                    9,
                    7
                ],
                "yob": 1981,
                "nationality": "Italy"
            },
            {
                "name": "Laura",
                "surname": "Mazza",
                "gender": "Female",
                "marks": [
                    8,
                    6,
                    7
                ],
                "yob": 1984,
                "nationality": "Italy"
            },
            {
                "name": "Eusebio",
                "surname": "Veizi",
                "gender": "Peanut",
                "marks": [
                    6,
                    6,
                    7
                ],
                "yob": 1993,
                "nationality": "Albany"
            },
            {
                "name": "Sara",
                "surname": "De Prà",
                "gender": "Fluid",
                "marks": [
                    8,
                    9,
                    10
                ],
                "yob": 1989,
                "nationality": "Italy"
            }
        ];

        const students = this.createStudentsFromData(data);

        return students;

        // const richData = this.addAge(data);

        // return richData;
    }

    getStudentsBy(){
        const students = this.getStudentsData();
        const studentsClone = students.slice();
        studentsClone.sort((s1, s2) => s1.compareByAge(s2));
        return studentsClone;
    }

    getShuffledStudents(){
        const students = this.getStudentsData();
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