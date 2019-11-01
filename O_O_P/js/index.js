import {Teacher} from './Teacher.js';
import {Hr} from './Hr.js';

const td = new Teacher();
td.setName("Vannak");
td.getName();
td.eat();
td.teach();
td.subject();
td.dach();

const hr = new Hr();
hr.setTitle("Suzuki");
hr.getTitle();
hr.setCalculate("I love eating");
hr.getCalculate();
hr.hr();
hr.pay();
hr.duch();