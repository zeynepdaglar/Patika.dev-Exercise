console.log("hello Node");
// eklediğimiz slugify ı buraya dahil ettik
var slugify = require("slugify");
const title = slugify("hello  lorem ipsum dolor", "*");
// çıktı: hello*lorem*ipsum*dolor
console.log(title);