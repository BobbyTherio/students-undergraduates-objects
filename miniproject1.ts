class Students {
    name: string;
    age: number;
    gender: string;
    nationality: string;

    constructor(name, age, gender, nationality){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }

    getNationality(){
        console.log(`Nationality is ${this.nationality}`);
    }
}

interface Iundergrad{
    name: string;
    age: number;
    gender: string;
    nationality: string;
    gpa: number;
}

class UnderGraduates extends Students implements Iundergrad {
    batch: number;
    gpa: number;

    constructor(name, age, gender, nationality, batch, gpa){
        super(name, age, gender, nationality);
        this.batch = batch;
        this.gpa = gpa;
    }
}

let student1 = new Students("Beth", 35, "Female", "American");
let student2 = new Students("Jo", 38, "Female", "Mexican");
let student3 = new UnderGraduates("Bobby", 31, "Male", "Albertan", 5, 4);
let student4 = new UnderGraduates("Rick", 42, "Male", "Mexican", 3, 2);
let student5 = new UnderGraduates("Dutton", 59, "Male", "American", 4, 1.5);

student1.getNationality();
student2.getNationality();
student3.getNationality();
student4.getNationality();

student3.gender = "female"
student4.gender = "female"
student5.gender = "female"

console.log(student3)
console.log(student4)
console.log(student5)
