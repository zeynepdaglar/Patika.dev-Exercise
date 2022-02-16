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