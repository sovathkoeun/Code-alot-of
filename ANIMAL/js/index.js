import {Dog} from './Dog.js';
import {Monkey} from './Monkey.js';
import {Tiger} from './Tiger.js';


const th = new Dog();
th.setName("this is a Dog!!!!!");
th.getName();
th.bite();

const t = new Monkey();
t.setWeight("this is a Monkey!!!!!");
t.getWeight();
t.jump();

const td = new Tiger();
td.setHeigth("this is a tiger!!!!!");
td.getHeigth();
td.run();
td.walk();
th.eat();
