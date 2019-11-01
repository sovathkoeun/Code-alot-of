import Programming from './Programming.js';
export class JAVA extends Programming{
    setAuthor(thor){
        this.mAuthor = thor;
    }
    getAuthor(){
        console.log(this.mAuthor);
    }
}