import Person from './Person.js';
export class Student extends Person{
    setRoom(room){
        this.mRoom = room;
    }
    getRoom(){
        console.log(this.mRoom);
    }
    read(){
        console.log("I like reading!!!");
    } 
}


