import Person from './Person.js';
 export class Teacher extends Person{
    teach(){
        console.log("teaching!!!!");
    }
    setSubject(subject){
        this.mSubject = subject;
    }
    getSubject(){
        console.log("javascript@@@@!!!!!");
    }
}