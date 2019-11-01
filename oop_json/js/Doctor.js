import people from  './People.js';
export class Doctor extends people{
    setTitle(title){
        this.mTitle = title;
    }
    getTitle(){
        console.log(this.mTitle);
    }
    inject(){
        console.log("this is a Inject!!!!!");
    }
}