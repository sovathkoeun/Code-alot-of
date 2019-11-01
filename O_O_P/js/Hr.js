import Person from './Person.js';
export class Hr extends Person {
    setTitle(title){
        this.mTitle = title;
    }
    getTitle(){
        console.log(this.mTitle);
    }
    setCalculate(cal){
        this.mCalculate = cal;
    }
    getCalculate(){
        console.log(this.mCalculate);
    }
    hr(){
        console.log("HR manager");
    }
    pay(){
        console.log("payment every month");
    }
    duch(){
        console.log("...................")
    }
}