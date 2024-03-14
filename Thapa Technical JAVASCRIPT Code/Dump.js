

// // let myfunc = (a,b) => a*b ;

// // console.log(myfunc(3,4));

// // var my = new Array('34','32');
// // var my2 = new Array(4);
// // console.log(my);
// // console.log(my2[2]);

// // prices  = [2,3,52,123,4534,334,54,32,644]

// //  var f = prices.find((currVlaue) => {
// //     // console.log(currVlaue);
// //     return true; //it actually return true for that value which is already stored in currValue variable which is later on returned back automatically.
// //  })

// //  console.log(f);

// //  item = ['apple','aaall','aae'];
// //  console.log(item.sort());

// const months = ['jan','feb','march'];

// const new_months = months.splice(0,0,'april','may') // splice(index, count_of_elements_want_to_remove, data want to enter);

// console.log(months);
// console.log(new_months); 

// const update2 = months.splice(2,0,'june','july');
// console.log(months);

// const update3 =  months.splice(0,4); // from index 0 to delete 4 item 
// console.log(months);

// var p  = new Date().toLocaleTimeString();
// console.log(p);

// function makeArmy(){
//     let shooters= [];
//     let i  =0;
//     while(i<10)
//     {
//         let shooter = function ()
//         {
//             console.log(i);
//         };
//         shooters.push(shooter);
//         i++;
//     }
//     return shooters;
// }
// let army = makeArmy();
// army[0]();
// army[5]();

var a = [1,2,3];
var arr = () => a[2];
// arr();

function foo(n)
{
    var f=  () => arguments[0] + n;
    return f();
}

console.log(foo(3));