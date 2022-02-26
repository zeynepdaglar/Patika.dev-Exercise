//Diziye eleman eklemek/çıkarmak
let arr = [222, "Masal", "Savana", "Makaron",]
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

//elemanları değiştirmek
arr[0] = 22
console.log(`ilk eleman değişti: ${arr[0]}`);
arr[arr.length-1] = "gel"
console.log(`son eleman değişti ${arr[arr.length-1]}`)


// splice() metot
// splice() metot diziye hem eleman eklemek için hem de eleman silmek için kullanılır. Metodun ilk parametresi işlemin yapılacağı index numarasını, ikinci parametre ise kaç elemanın silineceğini belirtir.
  var sports = ['basketball', 'football', 'tennis' ];
  console.log(sports); // basketball, football, tennis
  sports.splice(1,0,'baseball');
  console.log(sports); // basketball, baseball, football, tennis

  //dizideki en buyuk elemanı bulmak
  let numbers = [2, 35, 1, 56, 43, 4];
  let big = Math.max(numbers); //Nan döndürür
  let vBig = Math.max(...numbers);
  console.log(`dizideki en buyuk sayı ${vBig}`);

    //dizideki en kucuk elemanı bulmak
    let small = Math.min(numbers); //Nan döndürür
    let vSmall = Math.min(...numbers);
    console.log(`dizideki en küçük sayı ${vBig}`);
  
    