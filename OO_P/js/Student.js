import Human from './Human.js';
export class Student extends Human{
    read(){
        console.log("I love reading book!!!!");
    }
    setRoom(room){
        this.mRoom = room;
    }
    getRoom(){
        console.log(this.mRoom);
    }
    dach(){
        console.log(".....................");
    }
}