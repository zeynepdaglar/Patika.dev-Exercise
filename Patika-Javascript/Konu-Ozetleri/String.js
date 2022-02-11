let email = "zeynepdglr@gmail.com"
let firstname = "zeynep"
let lastname = "dglr"

//length: string karakter sayısı
console.log(`isminizin ilk karakteri ${firstname[0]}
isminizin ikinci karakeri ${firstname[1]}
`)

//.toUpperCase : hepsini büyük harf yapar
let upper = firstname.toUpperCase()
console.log(upper)
//.toLowerCase : hepsini küçük harf yapar
let lower = firstname.toLowerCase()
console.log(lower)

//search : string içinde istediğimiz bilgiyi aramak ve yerini bulmak
console.log(email.search("@"))
//olmayan seyler için -1 döndürür
console.log(email.search("buradayokk")) //-1

//inculude string içinde istediğimiz bilgiyi arar ve varsa true yoksa false döndürür


//slice :  belirli bir yere kadar alır
let DOMAIN =email.slice(email.search("@")+1)
console.log(DOMAIN)

console.log(DOMAIN.slice(0, DOMAIN.indexOf('.'))) //çıktı: gmail 

//replace : bilgiyi değiştirmek
email = email.replace('@gmail.com', 'Kodluyoruz.org')

//startsWidth : istediğim bilgiyle basladı mı ?
//console yazdır dene
email.startsWith('Kod')
//endsWidth : istediğim bilgiyle bitti mi ?
email.endsWith('kodluyoruz.org')

//ilk harfleri buyuk yapmak