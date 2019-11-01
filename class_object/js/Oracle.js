import Database from './Database.js';
export class Oracle extends Database {
    setPrice(prece){
        this.mPrece = prece;
    }
    getPrice(){
        console.log("This is Price 234$");
    }
}