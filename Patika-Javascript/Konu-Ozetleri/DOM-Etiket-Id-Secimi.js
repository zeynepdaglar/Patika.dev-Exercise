//DOM içinden oge secimi
// Elemanları etiket isimlerine göre seçmek için getElementsByTagName() metodu kullanılır.
// document objesinin getElementById() metodu ile sayfada bulunan html elementlerinin ID'leri referans alarak seçme işlemi yapabiliyoruz.
// Ayrıca sayfadaki tüm etiketleri bu şekilde getirebilirsiniz.
// document.getElementsByTagName('*')
// DOM'da istediğimiz class name'i taşıyan tüm elemanları seçmek için getElementsByClassName() 
// querySelectorAll() metodu, QuerySelector () metodu ile aynı mantık ile çalışır tek farkı eşleşen ilk elamanı döndürmek yerine eşleşen tüm elemanları bir NodeList objesi olarak döndürmesidir.

// let h2 = document.getElementsByTagName('h2');
let h2 = document.getElementById('title');
title.innerHTML = "degisen bilgi";
console.log(title.innerHTML);

//querySelector sadece bir tane secer
let link = document.querySelector('ul#list>li>a');
link.innerHTML += " degisti";

//yukarıdaki secme işlemini daha farklı yapabiliriz
//querySelector ile sadece id belirterekte istediğimiz bilgiye erişebiliriz
let link2  = document.querySelector('#myid');
link2.innerHTML += " id ile eriştik";
//style ile değişiklik yapabiliriz:
link2.style.color = "red";
//class ekleyebiliriz
link2.classList.add('btn');


//promt ile kullanıcıdan bilgi almak, çok tercih edilmez
let fullname = prompt("Lütfen adınızı giriniz");
let greeting = document.querySelector("#greeting");
greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullname}</small>`;
// Öncelikle bir fonksiyon belirleriz bu fonksiyon içerisinde prompt ile kullanıcıdan bilgi 
//ister document.write ile de sayfamıza yazdırırız. 
document.write(greeting);

//liste öğelerini değiştirmek
let firstchild = document.querySelector("ul#list>li:first-child");
firstchild.innerHTML = "ilk öğe değişti...";
console.log(firstchild);

let lastchild = document.querySelector("ul#list>li:last-child");
lastchild.innerHTML = "son öğe değişti...";
console.log(lastchild);

//yeni liste öğesi oluşturmak
let ulDOM = document.querySelector("ul#list");
let liDOM = document.createElement('li');;
liDOM.innerHTML = "Kendi oluşturduğumuz öğe";
console.log(ulDOM.lastChild);
//en başa eklemek:
ulDOM.prepend(liDOM);
//en sona eklemek:
ulDOM.append(liDOM);

//class eklemek veya cıkartmak 
// Syntax const elementClasses = elementNodeReference.classList;
// add() : HTML öğesine bir veya daha fazla class ekler.
// emove() : HTML öğesinden bir veya daha fazla class'ı siler.
// contains() : Element verilen class'ı içeriyorsa true, içermiyorsa false döner. Bu sayede bir işlem yaptırmadan önce kontrol edebiliriz.
// item() : HTML de class'ı verilen index sırasına göre döndürür. Eğer index, class length'inden (sayısından) daha büyük veya length'ine eşit olursa undefined döner.
// Toggle() : classList.add() ve classList.remove() yöntemini aynı anda çağırmak yerine classList.toggle() yöntemini kullanılabilir.
// length() : Bir öğede bulunan sınıf sayısını bilmemizi sağlar.
// replace() : Bir CSS sınıfını başka bir sınıfla değiştirmek için kullanılır.
let greeting1= document.querySelector("#greeting");
//text-primaryi css kısında tanımlayıp içini doldurmalıyız
greeting1.classList.add("text-primary");
//birden fazla class eklemek
greeting1.classList.add("new-info", "title", "fs-40");
//class silmek, birden fazla class silmek istersek aralarına virgüller koyarak yapabiliriz.
greeting1.classList.remove("text-primary");
console.log(greeting1.classList);

// Karşılaştırma Operatörleri
// == Eşitse
// === Hem değeri hem de türü eşitse
// != Eşit değilse
// < Küçükse 
// <= Küçük veya eşitse
// > Büyükse ve >= Büyük veya eşitse

// Mantıksal Operatörler
// && ve
// || veya
// ! değil
// var a = 10;
// var b = "kodluyoruz";
// console.log(!(a>11 || b="kodluyoruz"))  "Ekranda çıkan sonuç = false"
// ! (değil) mantıksal operatörümüz çalışma mantığı çıkan sonucumuzun tam tersini vermesidir. Yukarıda verdiğimiz örnek ! operatörü olmadan true sonucu döndürecektir fakat ! operatörümüz çıkan true sonucu terse çevirdiği için sonuç false dönecektir.
