//id ye göre istediğimiz kısmı seçtik
let title = document.querySelector("#h1-etiketi");

//önce yapmasını istediğimiz işlemin anahtar helimesi click vb..
//daha sonra ise fonksiyon adı yazarız:
title.addEventListener("click", domClick);

function domClick(){
    console.log("tıklandı");
    //console.log(this);
    //çıktı: idnin olduğu satırı komple aldı

    //console.log(this.innerHTML);
    //çıktı: html etiketi içinde yazanları getirir sadece 
    //yani consoleda My Website yazar

    console.log(this.innerHTML = "tıklandığı için bilgi değişti");
    //çıktı: hem consoleda hemde web sitesinde tıklandıkran sonra yeni değer gözükür  
}