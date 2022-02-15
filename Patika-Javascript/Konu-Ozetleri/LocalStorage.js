//LocalStorage 
//yapılan değişikliklerin kaydının tutulmasına yarar
// HTML 5 ile tarayıcılar iki tane yerel kayıt türünü desteklemektedir.
// localStorage
// sessionStorage
// Bu iki kayıt türü arasındaki en temel fark localStorage kayıtları zaman aşımı olmaksızın tutarken sessionStorage kayıtları oturum sonlanana kadar ya da veri kaybolana kadar tutmaktadır
window.localStorage.setItem("key","value");
//Veri Okuma
window.localStorage.getItem("key");
// Veri Silme
localStorage.removeItem("key");
  localStorage.clear();


//   LocalStorage İçine Farklı Türde Veriler Eklemek
let user = "kodluyoruz" 
localStorage.setItem('userInfo', user)


let userStatus = {userName: 'kodluyoruz', isActive: true}
localStorage.setItem('user', userStatus)
// çıktı: [object Object]
// Bunun sebebi localStorage içindeki bilgilerin key: value şeklinde, yalnızca string türünde değerler ile saklanmasıdır. İlk örnekteki user değişkeni userInfo bilgisine atanabilir ancak userStatus
//  bir obje olduğundan yukarıdaki görseldeki sonuçla karşılaşırız. Bunu önlemek için userStatus objesini stringe çevirmek gereklidir.
let userStatus = {userName: 'kodluyoruz', isActive: true}
localStorage.setItem('user', JSON.stringify(userStatus))

// LocalStorage'den Veri Alma
// LocalStorage'da değişkenler string olarak tutulduğundan, localStorage'tan user objesini almak istediğimizde userName ve isActive değerlerine erişemeyiz. 
// Stringify işlemini geri almak için parse() metodu kullanılabilir.