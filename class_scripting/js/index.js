import {PHP} from './PHP.js';
import {Python} from './Python.js';
import {Perl} from './Perl.js';

const to = new PHP();
to.setWeb("this is a Web!!!");
to.getWeb();

const td = new Perl();
td.remote();

const th = new Python();
th.hack();
th.execute();