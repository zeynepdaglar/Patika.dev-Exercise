//Diziye eleman eklemek/çıkarmak
let arr = [22, "Masal", "Savana", "Makaron",]
console.log(`Dizinin elemanları: ${arr}`);

//dizinin basına eleman eklemek 
let firstUnshift = arr.unshift("varım")
console.log(`dizinin basına eklenen eleman ${firstUnshift}`);

//dizinin basından eleman silmek 
let firstShift = arr.shift()
console.log(`dizinin basından silinen eleman ${firstShift}`)

//sona eleman eklemek
let lastPush =arr.push("sür eve")
console.log(`dizinin sonuna yeni eleman eklendi: ${lastPush}`);

//sondan eleman silmek
let lastPop = arr.pop()
console.log(`dizinin sonundan silinen eleman: ${lastPop}`);
