import {PHP} from './PHP.js';
import {JAVA} from './JAVA.js';
import {Node} from './Node.js';
import {Ruby} from './Ruby.js';

const to = new PHP();
to.setName("I alway execute");
to.getName();

const d = new Ruby();
d.error();

const node = new Node();
node.setVersion("go to school");
node.getVersion();

const ja = new JAVA();
ja.setAuthor("I learn JAVA!!!!");
ja.getAuthor();