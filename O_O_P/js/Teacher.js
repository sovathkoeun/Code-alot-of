
import Person from './Person.js';
export class Teacher extends Person {
    teach(){
        console.log("I love teaching");
    }
    setSubject(sub){
        this.mSubject = sub;
    }
    getSubject(){
        console.log(this.mSubject);
    }
    subject(){
        console.log("Chemistry");
    }
    dach(){
        console.log("................");
    }
}