//true false döndürür
//içinde veri varsa true yoksa false gösteriri
Boolean("11"); //true
Boolean("0"); //true
Boolean(""); //false

userName = "user";
console.log(Boolean(userName)); //true

Boolean(0); //false
Boolean(-0); //false
Boolean(-0.1); //ture

//mantıksal operatör: eşit mi?
Boolean(0 === 0); //true

Boolean(userName.lenght >0); //true