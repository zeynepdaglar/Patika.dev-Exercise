let str = ["1234"];
let s = str[0];
try{
    let element = "";
    for (let index = s.length-1; index >= 0; index--) {
        element += s[index];
    }
    console.log(element);
}
catch{
    // if (isNaN(s)) {
    //     console.log("s.split is not a function");
    //     console.log(s);
    // }
}

// try {
//        if (isNaN(s)) {
//            throw "s.split is not a function";
//        }
//        else{
//           let element = "";
//           for (let index = s.length-1; index >= 0; index--) {
//               element += s[index];
//           }
//           console.log(element);
//        }

// } catch (message) {
//     console.log(message);
//     console.log(s)
// }