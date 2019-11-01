import {Student} from './Student.js';
import {Seller} from './Seller.js';

const stu = new Student();
console.log("---------------------");
stu.setName("Bopha");
stu.getName();
stu.setProvince("Siem Reap");
stu.getProvince();
stu.setRoom("B32");
stu.getRoom();
stu.read();


const sl = new Seller();
console.log("------------------------");
sl.setName("Vy Rya");
sl.getName();
sl.setProvince("BMC");
sl.getProvince();
sl.setMarket("Soriya");
sl.getMarket();
sl.setProduct("Computer");
sl.getProduct();