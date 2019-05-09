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

    changeGrade(student){
      var grading;
      grading = getRandomInt(-50,50);
      return (student.grade += grading);
    }
}

class Student extends Person{
    constructor(attrS){
        super(attrS);
        this.previousBackground = attrS.previousBackground;
        this.className = attrS.className;
        this.favSubjects = attrS.favSubjects;
        this.grade = 50;
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
    gradCheck(){
      if(this.grade >= 70){
        console.log(`${this.name} is elligible to graduate from Lambda! Passing grade: ${this.grade}`)
      } else{
        console.log(`Current grade: ${this.grade}, ${this.name} is not elligible to graduate just yet, don't worry keep grinding!`)
      }
    }

}

class ProjectManager extends Instructor{
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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

const Miyagi = new ProjectManager({
  name: 'Mr.Miyagi',
  age: 65,
  location: "Okinawa",
  specialty: "Karate",
  favLanguage: "Javascript",
  catchPhrase: "Wax On Wax Off",
  gradClassName: "Web1",
  favInstructor: "Master Splinter"
})

Miyagi.changeGrade(Ricky)
Ricky.gradCheck()