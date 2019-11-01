export default class  Person {
    setName(name) {
        this.mName = name;
    }
    getName(){
        console.log(this.mName);
    }
    eat(){
        console.log("I love eating");
    }
}