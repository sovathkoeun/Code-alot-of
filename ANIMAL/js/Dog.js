import Animal from './Animal.js';
export class Dog extends Animal{
    setName(name){
        this.setName = name;
    }
    getName(){
        console.log(this.setName);
    }
    bite(){
        console.log("Dog is bite people!!!!");
    }
}