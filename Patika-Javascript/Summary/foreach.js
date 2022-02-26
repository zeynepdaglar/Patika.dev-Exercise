const ANIMALS = ["bird", "cat", "mouse", "dog"]
// ArrayName.forEach((item, index, array) => yapmasını istediğimiz işlem))

//1 dizinin elemanlarını yazdırmak
ANIMALS.forEach((animal, index) =>console.log(animal, index))

//2
ANIMALS.forEach((animal, index, array) =>console.log(array[index]))

//3 dizinin elemanlarına ekleme yapmak
ANIMALS.forEach((animal, index, array) =>console.log(array[index] = animal + " test"))

//4 dizin elemanlarını büyük harfle yazdırmak
ANIMALS.forEach((animal, index, array) =>console.log(array[index] = `${animal.toUpperCase()}`))

//5 html sayfasına yazdırmak
const userListDOM = document.querySelector('#userList');
ANIMALS.forEach(item => {
    const liDOM = document.createElement('li')
    liDOM.innerHTML = item
    userListDOM.append(liDOM)
})