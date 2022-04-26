console.log("2 ok");

//Operatörler
//Matematiksel operatörler
// + - * / %
// ++ -- **
// += -= *= /= %=
// Mantıksal oprtörler
// < >  <= >= == ! != ===  !== & | && ||

function kontrol() {
    var a = 10; b = "10";
    console.log("a= " + typeof a);
    console.log("b= " + typeof b);
    if (a==b&& typeof a == typeof b){
        // === çalışma mantığı
        console.log("a=b");
    } else {
        console.log("a!=b");
    }

    console.log(a+b); // string + int  (+) birleştirme özelliği var o yüzden 1010 sonuç
    a= a+ ""; // integer string' e çevirme.
    console.log(a * b) //direk çarpar ve 100 sonucunu verir.
}

//NaN (Not a Number)

// a/0 (infinity)


function faktoriyel(n) {
    var sonuc = 1;
    for (var i=1; i<= n; i++) {
        sonuc*= i;
    }
    return sonuc;
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function diziDongu() {
    for (var i =0; i<array.length; i++) {
        var item = array[i];
        console.log(item);
    }
    console.log("forEach");
    array.forEach(item => {
        console.log(item);
    });
    //delege parametresi fonksiyon olan fonksiyonlar.
    console.log("map")
    array.map(item => {
        console.log(item);
    });
}

//**********arrow function********
var diziDongu2 = () => {
    array.map((item,index, itself) => {
        console.log(index + " Deger: " + item);
         console.log("itself" + itself);
    });
}

// var a = [1, 2, 3, 4, 5, 6, 6, 8, 9, 10, 2, 2];
// var b = [2, 4, 5, 3, 1, 1, 3, 4, 5, 5];
// var c = [];
// function checkRepeat(array) {

//     for( var i=0; i<array.length; i++)
//     {
//         if(array[i]==array[i+1])
//         {
//             // console.log(array[i]);
//             array.splice(i, 1);
//             // break;
//         }

//     }
//     array.sort((x,y) => x-y );
//     array.forEach(element => {
//         console.log(element);
        
//     });
    

// }
// console.log(checkRepeat(a));
// console.log(checkRepeat(b));

var a = [1, 2, 3, 4, 5, 6, 6, 8, 9, 10, 2, 2];
var b = [2, 4, 5, 3, 1, 1, 3, 4, 5, 5];
var c = [];
// const input = prompt();

function checkRepeat(array) {
    var distinct = [];

    for( var i=1; i<array.length; i++)
    {
        var item1 = array[i-1];
        var item2 = array[i];
        if(item1==item2 && distinct.indexOf(item1) == -1)
        {
            
            // console.log(array[i]);
            distinct.push(item1);
            // break;
        }
        
    }
    return distinct.toString();
    

}
console.log(checkRepeat(a));
console.log(checkRepeat(b));

