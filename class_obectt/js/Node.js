import Programming from './Programming.js';
export class Node extends Programming{
    setVersion(sion){
        this.mVersion = sion;
    }
    getVersion(){
        console.log(this.mVersion);
    }
}