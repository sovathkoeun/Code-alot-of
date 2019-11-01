import Human from './Human.js';
export class Employee extends Human {
    setPosition(pos){
        this.mPosition = pos;
    }
    getPosition(){
        console.log(this.mPosition);
    }
    work(){
        console.log("Designer!!!!");
    }
    working(){
        console.log("I love my work!!!");
    }
    duch(){
        console.log(".....................");
    }
}