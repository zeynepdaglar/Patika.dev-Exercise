//typeof : veri türünü öğrenmek
let price = 90;
let stringName = "zeynep"
let stringNumber = "380";
let hasPassword = true;

console.log(
    "price: ",
    typeof(price)
); //number

console.log(
    "string name: ",
    typeof(stringName)
); //string

console.log(
    "string number: ",
    typeof(stringNumber)
); //string

console.log(
    "has password: ",
    typeof(hasPassword)
); //true

//parseInt() :stringleri inte  dönüştürür
let number1 ="11";
number1 = parseInt(number1);
console.log("number1: ",  typeof(number1));

let number2 = "11px";
number2 = parseInt(number2);
console.log("number2: ",number2 , typeof(number2)); // number2: 11  number

//parse.Float() :
let number3 = "11.4px";
number3 = parseFloat(number3);
console.log("number3: ", number3, typeof(number3));

//.toString() : 
let number4 = 55;
number4 = number4.toString();
console.log("number4: ", number4, typeof(number4));
//--------------------------------------------------
//Template literals
let username = "zeynepdglr";
email = username + "@" + "gmail.com";
let info = `Merhaba ${username} sitemize hoşgeldin
Mail adresin ${email}`;
console.log(info);

let characters = `ìsminizin ilk harfi: ${username[0]} ìsminizin ikinci harfi: ${username[1]} ìsminizin üçüncü harfi: ${username[2]}`;


