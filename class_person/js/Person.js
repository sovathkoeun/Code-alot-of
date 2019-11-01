// person 
// + speak
// + run 
// + name
// + age

// student 
// + write 
// + read 
// - class 

// Teacher 
// + teach 
// - subject

 export default class Person {
    speak(){
        console.log("My teacher is speak fastly");
    }
    run(){
        console.log("My teacher is run fast");
    }
    setName(name){
        this.mName = name;
    }
    setAge(age){
        this.mAge = age;
    }
    // getter
    getName(){
        console.log("12345678");
    }
    setAge(){
        console.log("0987654321");
    }
}
const sk = new Person();
sk.setName();
sk.getName();
