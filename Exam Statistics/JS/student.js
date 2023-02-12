/*In student.js file:
write a constructor function with two arguments that represent name and surname of a student 
add to its prototype a method getStudentData that returns the name and surname of the student*/


class Student {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getStudentData() {
        return this.name + " " + this.surname;
    }
}