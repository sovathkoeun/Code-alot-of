import Animal from './Animal.js';
export class Monkey extends Animal{
    jump(){
        console.log("Monkey is jump fastly!!!!!");
    }   
    setWeight(weight){
        this.setWeight = weight; 
    }
    getWeight(){
        console.log(this.setWeight);
    }
}