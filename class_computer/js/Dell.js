import Computer from './Computer.js';
export class Dell extends Computer{
    setName(name){
        this.mName = name;
    }
    getName(){
        console.log("Dell have color blue");
    }
    run(){
        console.log("12345678")
    }
}