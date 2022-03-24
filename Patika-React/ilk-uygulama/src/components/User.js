import propTypes from "prop-types";
// PROPS:
//oluşturduğumuz componentlere parametre vermek isteyebiliriz verdiğimiz parametrelerle o componentin
//initial görüntüsünü oluşturmak isteyebiliriz. Bu durumlarda props yapısını kullanırız:
//app.js de verdiğimiz default değerler fonksiyonumuzdaki ilk parametreye düşer, ve türü objedir.
function User(props) {
    console.log(props);
    return(
    <>
        <div>
        {props.isLoggedIn
          ?`Giriş Başarılı User: ${props.name}-${props.surname}, age-${props.age}`
          : "Giriş yapmadınız !"
        }
        </div>
        <br/>
    </>);
   }

//bize gelen parametrenin türünün obje olduğunu biliyoruz oyuzden değerleri istediğimiz sıre ile tek tek 
// alabiliriz:
function User2({name, surname, age, isLoggedIn, friends}) {
    return(
    <>
        <div>
        {isLoggedIn ?`Giriş Başarılı User2: ${name}-${surname} age-${age}`: "Giriş yapmadınız !"}
        </div>
    {
        //map: array içindeki her elemanı tek tek döner ve her seferinde bir index değeride verir.
        // return ettiğimiz değerlerin listelenirken performans kaybı yaşamaması için bizden bir key değeri istenir.
        //key değeri illaki bu değer index olmak zorunda değil array altında benzersiz herhangi bir ifade varsa oda olur. 
        friends.map((friend, index) => (
        <div key={index}>
            {index}-{friend}
        </div>
        ))}
        <br/>
    </>);
}

function User3({name, friends}) {
    return(
    <>
     <div>{name} Friends:</div>
    {
        friends.map((friend) => (
        <div key={friend.id}>
           {friend.name}
        </div>
        ))}
    </>);
}

// daha güvenli olması için propslarımızın tiplerini belirtmeliyiz
User.propTypes = {
    name: propTypes.string,
}
//fonksiyonları dışa aktardık
export {
    User,
    User2,
    User3
};