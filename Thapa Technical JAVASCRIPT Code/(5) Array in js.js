// 5th udpate
 // Array in javascript - it is not strict to store oly single type of data
 var myfriends =  ['rohan','Bintu','sohan','tintu',3,true] ; // yha par var friends  = new array ( ye instance create akrni jarurat nahi hai automatic ho jata ahai )

 console.log(myfriends); // print whole array
 
 console.log(myfriends[0]); // accessing the data individually
 console.log(myfriends[4]);
 
 //1.  property of array 
 console.log(myfriends.length); // gives the length of the array 
 
 // Differnce b/w FOR ,For IN, for Of loop  
 // for -  it is used for simple iteration
 // for In -  It can be used with Array iteration for items
 
 for(let position in myfriends)   // position here gives index value
 {
     console.log(`My friend stored at ${position} and name is ${myfriends[position]}`);
 }
 
 for( let position of myfriends) // in this kind of loop it gives the direct value stored in that position
 {
     console.log(`My friend name is ${position}`);
 }
 
 
 // ForEach method in array
 
 var nums = [2,2,4,5,3,2];
 
 nums.forEach((n) =>{  //t is used to iterate over the elements of an array and execute a provided function once for each array element.
     console.log(n*2);
     return "this";
 })
 
 // first paramter - denotes the element array.
 // second paramter -  denotes the index
 // third paramter  - refer to the array
 // and it is not neccessary to use all the paramters its benefit of using for each is we can access all these things with single method where we use for in , for of loops
 nums.forEach((element,index_of_item,array)=>{
     console.log(`this is the element ${element} at ${index_of_item} from the array ${array}`);
 })
 
 
 
 
 //Methods in Array
 // 1. Indexof()  - gives the index of first occoured element after searching in the array. and if it is not present then it will give the -1
 var names  = ['rohan','sohan','thapa', 'technical','thapa'];
 console.log(names.indexOf('thapa'));
 console.log(names.indexOf('thapa',3)); // it will start search from index 3 rd
 
 
 //2. lastIndexof() - It searches from left to right & returns the first encountered element. if element not found then returns -1
 
 var nums = [2,2,3,4,3,7,6,3];
   console.log(nums.lastIndexOf(3)) //7 - by default value is always (length - 1) but search from right to left and return the first encountered item.
   console.log(nums.lastIndexOf(3,4))//4 - it start searches from right to left from index 4.
   console.log(nums.lastIndexOf(3,-1))//7 - searches the string from right to left.
 
 //3. Includes()  - this function return the boolean value whether the item present in array (true) or false if not.
 console.log(names.includes('technical'));
 
 //4 . find() - find() function is used to search for an element in an array that satisfies a provided testing function. It returns the first element in the array that meets the specified criteria, or 'undefined' if no matching element is found.
 
 console.log("Break point 1")
 prices  = [2,3,52,123,4534,334,54,32,644]
 
  console.log(prices.find((currVlaue) => {
    //  console.log(currVlaue);
     return currVlaue > 4000; //it actually return true for that value which is already stored in currValue variable which is later on returned back automatically.
  }))
 
  console.log("Break point 2")
  item_price_check =  prices.find((current_value) =>{
     return current_value < 40;
  });
 
  console.log(item_price_check);
 
  // 5. findIndex -  this method return the index of the element which passes the test . It executes for every element like find method and returns -1 if no match found.
  console.log("Break point 3")

  console.log(prices.findIndex((elemt)=>{
     // console.log(elemt);
     return elemt >3000
  }))
 
 // 6. findLast()- The value of the last element that passes a test
 // 7. findLastIndex()-	The index of the last element that passes a test
 
 //8. filter - method creates a new array filled with elements that pass a test provided by a function.method does not execute the function for empty elements. method does not change the original array.
 
 // ((a) example with arrow function
 prices  = [2,3,52,123,4534,334,54,32,644]
 
 var newarray = prices.filter((current_val2,index2)=>{
     return current_val2 >100;
 })
  
 console.log(newarray);
 
 // Note - Unlike other languages in js during compilation phase  move all the functiuon definition automatically at the top . so it won't give you the error like in c++ or some other languages. but this doesn't work when you create arrow fat function .
 
 
 // (b) example with simple function expression 
  var newarray  = prices.filter(check_pr);
  console.log(newarray);
 
  function check_pr(price_of)
  {
     return price_of <100;
  }
 
 // these type of methods where you are writing call back function it simply use the function name as refernce, no parantheses required and automatically pass the every item for the condition check as simple function called ( item inside the parantheses).
 
 
 //9.  Sort() - it sort the method into ascending order. It changes into actual array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
 
 const months  = ['dc','c','e','a','db'];
 
 console.log(months.sort());
 console.log(months) // it changes the actual array
 console.log(prices.sort());  // it gives incorrect answer for number
 
 // However, if you sort (120, 24). then it convert the unit place value '1' and '2' into string and sort it and give you incorrect answerw which is 120 , 24
 
 // 10. Crud Operation in Array 
     // (A)  push() - adding data at the end of the array . and it returns the new length of the array.
 
     const animals = ['pigs','goats','sheep'];
 
     const size = animals.push('buffalo');
     console.log(`push function return size - ${size} `);
  
     animals.push('chicken');
     console.log(animals);
 
 
     // (B) unshift() -  The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. It modifies the original array by shifting existing elements to higher indices.
 
     const fruits = ['apple','bnanana','grape'];
     fruits.unshift('kivi')
     const size2  = fruits.unshift('pineapple','chiku');
     console.log(size2);  // returns the size
     console.log(fruits);  
 
     // (C) pop() - the pop() method removes the last element from an array and returns that removed element
     
     const removed_element = fruits.pop();
     console.log("removed element" + removed_element);
     console.log(fruits);
 
     //(d) shift() - he shift() method removes the first element from an array and returns that removed element.
 
     var removed_second_element = fruits.shift()
     console.log(removed_second_element);
     console.log(fruits);
     
     //splice () - alternate of CRUD(push,pop,shift,unshift). It can all be achieved using single method. and also we can remove and add it anywhere in the array. It modifies the existing array and return the always removed elment array beacuse it is mostly used to delete.
 
     
     const months2 = ['jan','feb','march'];
 
     const new_months = months2.splice(0,1,'april','may') // splice(position_of_array_element_add, count_of_elements_want_to_remove, data you want to enter);
 
     console.log(months2);
     console.log(new_months); 
 
     const update2 = months2.splice(2,0,'june','july');
     console.log(months2);
 
     const update3 =  months2.splice(0,4); // from index 0 to delete 4 item 
     console.log(months2);
 
 // 11. reduce() - This function executes the reducer function which takes four arguments.accumulator, current_vlaue,current index, source array,
 //the fucntion return the accumulated result in single value . It does not change the orignial array. Normally, accumulator initial value is by default set to first element and iteration will start from second element. you can change the accumulator value as passing as second argument. everything result stored at accumulator which is later returned. it is used in these like  avg, sum of all, etc.
 // It is also used to flatten an array means convert tthe 2d, 3d aray in single dimensional array.
 
 
 var num1  = [3,2,4,45,5];
 
 var result1  = num1.reduce((accumulator1,elem1,index1,array)=>{
     debugger;
    //  console.log(accumulator1, elem1, index1); // initially - accumulator1 - 3, elem1 - 2, index1 - 1
     return accumulator1 + elem1;
 })
 console.log(result1);
 
 var result2 = num1.reduce((accumlator2, elem2)=>{
     console.log(accumlator2);
     return accumlator2 +elem2
 },-100) // second argument passed as accumulator value 
 console.log(result2);
 
 
     // 12. Map()  - it is also used as various methods for iterating to the array. Main purpose is to creating new array. eg - forEach(). But the main difference is map function can return the modified array and after iterating over every element whereas forEach function return undefined it does not return any array. It also doesn't change in orignal array.
 
 // The second difference between these array methods is the fact that map() is chainable. This means that you can attach reduce(), sort(), filter() and so on after performing a map() method on an array.
 
 var nums2  =  [2,13,4,16];
 var num3  = nums2.map((element,index)=>
 {
     return element*2;
 })
 
 console.log(num3);   // new modifed array
 console.log(nums2);  // original array
 
  // chaining example of map()  function
 
  var num4 =  nums2.map((element)=>
  {
     return element*2;
  }).filter((element)=>{
     return element >10;  // in this fisrt map Method runs then its result is shared with Method which is next to it. In this manner chaining works in map Mehtod. 
  })
  console.log(num4)
 
  var num5 =  nums2.map((element)=>
  {
     return element*2;
  }).filter((element)=>{
     return element >10;  // in this fisrt map Method runs then its result is shared with Method which is next to it. In this manner chaining works in map Mehtod. 
  }).reduce((accumulator,elelment,index)=>{
     return accumulator+= elelment;
  })
  console.log(num5);
 
 

 
 
 
 
  