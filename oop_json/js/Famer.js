import People from './People.js';
export class Famer extends People{
    setField(field){
        this.mField = field;
    }
    getField(){
        console.log(this.mField);
    }
    setCut(ct){
        this.mCt = ct;
    }
    getCut(){
        console.log(this.mCut);
    }
}