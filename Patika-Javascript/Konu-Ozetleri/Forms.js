//FORM
// Genellikle backend'e istek yapılacağı zaman kullanılır.(Veri göndermek gibi)
// En önemli parametresi method parametresidir. Method, "post" veya "get" olmak üzere iki türlü değer alabilir.
// GET Methodu: Form verilerini URL üzerinden gönderir. Örneğin; elimizde kullanıcıdan yaşını istediğimiz bir form elementi bulunsun. Kullanıcı yaşını girip gönder butonuna 
// bastığı zaman mail alanına girdiği veri URL üzerinden gönderilir.
// UYARI: Get metodu önemsiz verilerde kullanılmalıdır, kullanıcı adı, şifre gibi bilgilerin bu method ile gönderilmesi uygun değildir.
// POST Methodu: Verileri arka planda gönderir. Örneğin; kullanıcı mail adresini girip gönder butonuna bastığı zaman veriler kullanıcıya gözükmeyecek şekilde sayfaya gönderilir.



//formu seciyoruz
let fromDOM = document.querySelector("#userForm");
//sabmit işlemi olduğunda bizim oluşturduğumuz fromSubmit fonksiyonunu çalıştıracak
//default olarak submit işleminde GET uygulanır
fromDOM.addEventListener('submit', fromSubmit);

function fromSubmit(event){
    //default olarak uygulanan GET işlemini yapma dedik ve default işlemi engellemiş olduk
    event.preventDefault(); 
    console.log("işlem gerçekleşti");
}