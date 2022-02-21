const PRODUCT = ["mic", "cable", "speaker", "desktop pc", "server", "mose", "keyboard"]
//filter ile istediğimiz elemanları seçip yeni bir array e koyduk
const NEW_PRODUCTS = PRODUCT.filter(item => item.length > 5)
console.log(`filtrelenmiş dizinin elemanları: ${NEW_PRODUCTS}`)

//Aktif kullanıcıları bul
const USER = [
    {fullname: "ayse sumer", isActive: false},
    {fullname: "ahmet sumer", isActive: true},
    {fullname: "mehmet sumer", isActive: true},
    {fullname: "aksel sumer", isActive: false},
]

const ACTIVE_USER = USER.filter(item => item.isActive === true)
console.log(`Aktif kullanıcılar: ${ACTIVE_USER}`)

//biz bir şeye bakmak istediğimizde default olarak true ya bakar oyuzden ekstradan belirtmesekte olur
// const ACTIVE_USER = USER.filter(item => item.isActive)

const NEW_USER = USER.map(user => user.toLoweCase())
console.log(NEW_USER)

//bir obje kullanıcağımız zaman ya return yapmalıyız yaza () arasına yazmalıyız
//gelecek degerlerimizin {username: "AYSE", shortname: "A.", newname: "Ayse"} formatında olmasını istiyoruz
const USER_OBJ = USER.map(item => {
    return{
        username: item, shortname: `${item[0]}.`, newname: `${item[0].toUpperCase()}${item.slice(1).toLoweCase()}`
        //slice ile 1. karakter ve sonrasını aldık
    }
})

//aynısının farklı yazım şekli
const USER_OBJ = USER.map(item => (
       { username: item, shortname: `${item[0]}.`, newname: `${item[0].toUpperCase()}${item.slice(1).toLoweCase()}`}
        //slice ile 1. karakter ve sonrasını aldık
    )
)