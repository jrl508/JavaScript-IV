// CODE here for your Lambda Classes
class Person{
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;   
    }
        speak(){
            console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
        }
}

class Instructor extends Person{
    constructor(attrI){
        super(attrI);
        this.specialty = attrI.specialty;
        this.favLanguage = attrI.favLanguage;
        this.catchPhrase = attrI.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student,subject){
        console.log(`${student} receives a perfect score ${subject}`);
    }
}

class Student extends Person{
    constructor(attrS){
        super(attrS);
        this.previousBackground = attrS.previousBackground;
        this.className = attrS.className;
        this.favSubjects = attrS.favSubjects;
    }
    listSubjects(){
        console.log("List of Subjects: ")
        this.favSubjects.forEach(subject => {
            console.log(`${subject}`);
        });
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun a sprint challenge on ${subject}`);
    }

}

class ProjectManager extends Person{
    constructor(attrPM){
        super(attrPM);
        this.gradClassName = attrPM.gradClassName;
        this.favInstructor = attrPM.favInstructor;
    }

    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const Ricky = new Student({
  name: "Ricky L",
  age: "27",
  location: "Brockton, MA",
  previousBackground: "Studied MechE at UMass Lowell, worked as a waiter.",
  favSubjects: ['OOP', 'CSS','Machine Learning', 'Forbidden Jutsu']
})
Ricky.speak()
Ricky.listSubjects()