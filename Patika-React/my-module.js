function topla(number1, number2){
return number1 + number2;
}
//diğer yazım şekli
// const topla = function topla(number1, number2){
//     return number1 + number2;
//     }

//arrow function ile yazılışı
// const topla = (number1, number2) => {
//     return number1 + number2;
// }

//arrow function ile tek satırda yazmak
// const topla = (number1, number2) => number1 + number2;

// yazdığımız bu fonksiyonu başka bir dosyada kullanmak istiyorsak onu dışa aktamamız gerekir
// export default topla;
// yada dışa aktarmak istediğimiz fonksiyonun başına export yazabiliriz
//yada:
export{
    topla,
    hello
}

const hello = (name) => console.log(`helloooo ${name} :)`);