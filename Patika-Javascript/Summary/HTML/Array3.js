let item =[1, 2, 3, 4];
let female = ["Marry", "Gloria", "Robin"];
let male = ["Cody", "Ted", "Barney"];

//Bir dizinin başına dizi eklemek
item.unshift(female);

//Bir dizinin sonuna  dizi eklemek
item.push(male);
console.log(`dizinin yeni hali: ${item}`);
console.log(`dizinin yeni halinin uzunlugu ${item.length}`);

let arr1 = item[0].length;
console.log(`dizinin basına eklediğimiz dizinin uzunluğu: ${arr1}`);
console.log(`dizinin içindeki dizinin ilk elemanı: ${item[0][0]}`);//Marry

//splice
//array içinden öge ayırmak
let newitem = item.splice(0, 3);
console.log(`newitem: ${newitem}`);
console.log(`item: ${item}`);

//indexOf
//istediğimiz elemanın index bilgisini bulmak
console.log(`Ted elemanının index numarası: ${item.indexOf("Ted")}`)

//splice
//diziyi kopyalamak
let copyItem = item.splice();

//es6 ve sonrasında gelen özellik
//diziyi kopyalamak
let copyItem2 = [...item] 

//es6 ve sonrasında gelen özellik
//iki diziyi aynı yere kopyalamak 
let alluser = [...female, ...male]

//Array içindeki bilgiyi stringe cevirmek
alluser.toString();
//yada
//aralarına --- koyarak yazdı
alluser.join(" --- ")

// .includes()
// Includes metodu bir elemanın dizi içerisinde bulunup bulunmadığını kontrol eder. Boolean (true/false) olarak çıktı alınır.

// .concat()
// Bu metot farklı dizileri birleştirip tek bir diziye çevirmemizi sağlıyor.