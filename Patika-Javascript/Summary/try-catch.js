let products;

try {
    products.array.forEach(element => {
        console.log(element);
    });
} catch (error) {
    console.log(`error: ${error}`);
    products = [1, 2, 3];
    products.array.forEach(element => {
        console.log(element);
    });
}

try {
    //Çalıştırılacak kodlar
  }catch(hata) {
    //Hata yakalandığında çalışacak kodlar
  }finally {
    //try tamamlandıktan sonra hata olsada olmasada çalışacak olan kodlar.
  }