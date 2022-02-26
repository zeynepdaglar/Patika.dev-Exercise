const LoremList = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'elit', 'dream'
];

//BREAK:
let counter =0;
//for döngüsünde her zaman başlangıç degeri vermek zorunda değiliz, noktalı virgül koyduğumuzda bu kısmı boş geç demiş oluruz
for(; counter < 10; counter++){
if(counter === 5){break} //break ifadesini buraya koyduğumuz için 5 i gördüğünde işlemlere devam etmez 
console.log(counter);
}
// çıktısı: 1, 2, 3, 4 

for(; counter < 10; counter++){
    if(counter === 5) 
    console.log(counter); {break}
    }
//çıktı: 1, 2, 3, 4, 5



//CONTİNUE:
for(; counter < 10; counter++){
    if(counter === 5) {continue} //5 i gördüğünde o kısımı  atlar ama geriye kalan hepsini yardırır
    console.log(counter); 
    }
//çıktı: 1, 2, 3, 4, 6, 7, 8, 9

//break-countinue.html dosyasında userList id sine sahip olanı seçtik ve UL_DOM içine koyduk
const UL_DOM = document.querySelector('#userList');
let index = 0;

for(; index<LoremList.length; index++){
//loremList elemanlarında dolor u görünce işlemleri bitir
if(LoremList[index] === "dolor"){break}
//document içerisine li elementleri oluştur
let LI_DOM = document.createElement('li')
//LI_DOM un inner html sinde LoremListin elemanları gözüksün
LI_DOM.innerHTML = LoremList[index]
//append ile UL_DOM un içerisine LI_DOM u ekliyoruz 
UL_DOM.append(LI_DOM)
}
//Çıktı: lorem, ipsum


//Etiketli break Örneği
//etiketli break ifadesi her ne kadar iç döngü içerisinde olsa dahi
//etiketin başına konulduğu döngü için etki eder.
//Böylece daha geniş çaplı bir dögüden çıkılmış oldu.
cikis_etiketi: for (var i = 0; i <= 5; i++) {
    for (var j = 0; j <= 50; j++) {
      if (j == 9) {
        break cikis_etiketi;
      }
      console.log("iç döngüden j :" + j);
    }
   }
   
   //Etiketli Continue Örneği
   
   gec_etiketi: for (var i = 0; i <=5; i++) {
    for (var j = 0; j <= 4; j++) {
      if (j == 2) {
        continue gec_etiketi;
      }
      console.log("iç döngüden j :" + j);
    }
   }