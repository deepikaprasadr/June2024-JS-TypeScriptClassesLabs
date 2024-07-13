import { Person } from "./Person";
//how to define an array// array can take string or number or any datatype. It is a problem
//a Generic array
let arr=[1,"Shiv","Sammi",true,undefined]
//it can also be of array type
let strarray : Array<string> = ['React','C#','SQL','Javascript','.Net API'];
let anyarray : Array<any> = [1,"React",true]
anyarray.push("Software Developer");

//Union Type
let uniontypeArray : Array<string|number> = ["Champro","CHA",1,2];
//in Union Type we can also create object of classes
let uniontypeObjectPerson : Array <string|Person>=['a','b', new Person()]


//restrict an array to a specific datatype. This will overcome the above problem
//a specific array
let arr1:string[]=["tea","coffee","rosemilk","lassi"]

//spread operator
//if you want to add one array to another array

let arrnames:string[]=["Vinayak","Deepika","Sammi"]
 
let arrjobs:string[]=["Engineer","Software Developer","Doctor",...arrnames] //spread operator
let arrobj:string[]=["item1","item2","item3",...arrjobs]//[arrayitems list, ...arr1 ]

//Next Topic: Spread Operator
//similar to params function in c#

function addition(a:number,b:number,...arr:number[])
{
    
    let result=a+b; //2, 3 is a, b and the rest are the array
    console.log(`"a is:" ${a} "b is:" ${b}`);
    for(let nos of arr){
        console.log(`"THe spread operator:" ${nos}`);
        result=result +nos
    }

    console.log("Result=" +result);
}
addition(2,3,4,5,6,7,8,9,10);// 2, 3 is a, b and the rest are the array

//how to push additional array to an existing variables using spread operator.
let arr3:string[]=["summer","fall"];
arr3.push(...anyarray);
let concatenatedStr:string="";

for (let item of arr3)
{
     concatenatedStr=item;
    concatenatedStr=  concatenatedStr+item;
    console.log(`spread operator push array:  ${item}` );
    
}
console.log(`concatenatedStr is: ${concatenatedStr}`);
//for loops
//1.for of
//2. for in

//1.for of
    for (let item of anyarray)
    {
        console.log(`"Items in anyArray are: " ${item}`);
    }
  
  //2. for in
    for (let item in anyarray)
    {
        console.log(`"Items in anyArray are using for in array : " ${anyarray[item]}`)
    }