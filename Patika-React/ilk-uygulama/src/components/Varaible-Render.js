const Name = "Zeynep";
const Surname = "Daglar";
const isLoggedIn = true;

//isLoggedIn true ise bir değişkeni h1 tagı içerisinde yazdırmak:
function Varaible() {
    return(
        <>
          <h1>{isLoggedIn && `Ad-Soyad: ${Name}-${Surname}` }</h1>
          { !isLoggedIn && "Giriş Yapmadınız!"}
        </>
    );
};

function Varaible2() {
    return(
        <>
          {/* <h1>Ad-Soyad: {Name}-{Surname}</h1>*/}
          <h1>{isLoggedIn ? `Benim adım ${Name}, soyadım ${Surname}` : "Giriş Yapmadınız"}</h1>
        </>
    );
};


//birden fazla dışa aktarma işlemi:
export{
    Varaible,
    Varaible2
};