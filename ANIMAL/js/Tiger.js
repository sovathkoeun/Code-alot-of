import Animal from './Animal.js';
export class Tiger extends Animal{
    run(){
        console.log("Tiger is a bigger!!!!!!");
    }
    setHeigth(heigth){
        this.setHeigth = heigth;
    }
    getHeigth(){
        console.log(this.setHeigth);
    }
}