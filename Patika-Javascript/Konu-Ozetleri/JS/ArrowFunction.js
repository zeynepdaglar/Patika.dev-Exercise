//Arrow function syntax
//const fonksiyonAdı = (parametre1, parametre2) => {kodlar...};

const helloFuncV1 = (firstname) => {console.log(`hello :) ${firstname}`)};
helloFuncV1("chris");

//tek bir parametre ve tek satırlık bir kodumuz varsa bu şekilde yazılabilir.
const helloFuncV2 = firstname => 
console.log(`hello :) ${firstname}`);
helloFuncV2("Cody");

//birden fazla parametre varsa ve birden fazla kod satırı varsa
const helloFuncV3 = (firstname, surname) => {
    console.log(`Hello ${firstname} ${surname} :) `);
    console.log(`Lorem ipsum dolor.`);
}

helloFuncV3("Ted", "Mosby");