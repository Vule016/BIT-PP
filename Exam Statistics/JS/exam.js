/*In exam.js file: 
write a constructor function with three arguments that represent a subject, a student, and a grade. 
add to its prototype a method getExamInfo that returns the name of the subject and the name and surname of the student.
add to its prototype a method hasPassed that checks if the student has passed the exam. A student has passed the exam if their grade is greater than 5.*/

class Exam {
    constructor(subject, student, grade) {
        this.subject = subject;
        this.student = student;
        this.grade = grade;
    }

    getExamInfo() {
        return this.subject.getSubjectName() + " - " + this.student.getStudentData() + "  " + this.grade;
    }

    hasPassed() {
        if (this.grade > 5) {
            return true;
        }
        return false;
    }
}