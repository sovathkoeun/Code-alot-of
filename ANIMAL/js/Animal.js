
export default class Animal{
    setAnimal(Animal){
        this.setAnimal = Animal;
    }
    getAnimal(){
        console.log(this.getAnimal);
    }
    walk(){
        console.log("Animal is walk fastly !!!");
    }
    eat(){
        console.log("Animal is eat grass!!!!!!");
    }
    setColor(color){
       this.setColor = color;
    }
    getColor(){
        console.log(this.setColor);
    }
}