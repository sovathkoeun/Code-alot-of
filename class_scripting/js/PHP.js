import Scripting from './Scripting.js';
export class PHP extends Scripting {
    setWeb(web){
       this.mWeb = web;
    }
    getWeb(){
        console.log(this.mWeb);
    }
}