console.log(`document url: ${document.URL}`);
console.log(`document location: ${document.location}`);
console.log(`document location.hostname(ıp adresi): ${document.location.hostname}`);
console.log(`document location.pathname: ${document.location.pathname}`);
console.log(`document body: ${document.body}`); //body kısmını komple getirir içindeki kodları vs..
console.log(`document body: ${document.head}`); //head kısmını komple getirir içindeki kodları vs..

//dom ile bilgilere ulaşabildiğimiz gibi bilgiler üzerinde değişiklikte yapabiliriz
document.body.style.backgroundColor = "bisque"
