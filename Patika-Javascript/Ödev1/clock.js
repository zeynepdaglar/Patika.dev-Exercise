//kullanıcıdan bilgi almak:
let name  = prompt("Lütfen adınızı giriniz.");
let date = new Date();
//kullanıcıdan alınan bilgiyi username id sine sahip etikete yazdırmak:
document.getElementById("username").innerHTML = `Web Sitemize Hoşgeldin ${name}`;
document.getElementById("time").innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;