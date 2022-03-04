//başka bir js dosyaysını dahil ediyoruz:
// import topla from './my-module.js'; yada:
import {topla, hello} from './my-module.js';


console.log(topla(2,4));
hello("Ted");

// eklediğimiz slugify ı buraya dahil ettik
//eskiden:  var slugify = require("slugify");
// es6 ile:
import slugify from "slugify";
const title = slugify("hello  lorem ipsum dolor", "*");
// çıktı: hello*lorem*ipsum*dolor
console.log(title);
