 import Person from './Person.js'; 
 export class Student extends Person {
    write(){
        console.log("writing!!!!");
    }
    read(){
        console.log("readin!!!!");
    }
    setClass(room){
        this.mRoom = room;
    }
    setClass(){
       console.log("this is a room!!!");
    }
    Class(){
        console.log("Class_2020B!!!!");
    }
    gegClass(){
        console.log("Class_2020A!!!!!");
    }
}