//id ye göre istediğimiz kısmı seçtik
let title = document.querySelector("#h1-etiketi");

//önce yapmasını istediğimiz işlemin anahtar helimesi click vb..
//daha sonra ise fonksiyon adı yazarız:
//title.addEventListener("click", domClick);
title.addEventListener("mouseover", domClick);

function domClick(){
    console.log("tıklandı");
    //console.log(this);
    //çıktı: idnin olduğu satırı komple aldı

    //console.log(this.innerHTML);
    //çıktı: html etiketi içinde yazanları getirir sadece 
    //yani consoleda My Website yazar

    console.log(this.innerHTML = "tıklandığı için bilgi değişti");
    //çıktı: hem consoleda hemde web sitesinde tıklandıkran sonra yeni değer gözükür  
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red";
}

//click: tıklandığında
//mouseover: mouse üzerine geldiğinde...
////dblclick=çift tıklama etkinliği


//id=fname olan nesne çağrılarak keyboard değişkenine atandı
const keyboard =document.querySelector('#fname');
//keyboard isimli değişkene "cut" etkinliği atandı ve fonksiyon ismi parametre olarak atandı
keyboard.addEventListener("cut",cuttingFunction);
//cuttingFunction isimli fonksiyon ile form inputuna yazılan girdileri klavye ctrl+c ile kesildiğinde etkinlik çalışmaktadır
function cuttingFunction(event){
  console.log("etkinlik tipi: " , event.type)
  } 
  
//console ekranı : etkinlik tipi: cut