//datatypes
//let var
//hoising
//function
//class in Person.ts

var i=10; // in javascript possible
var i:number=10; //in typescript
var j:string="Deepika";
let cloudname:string|number=123;
let containername:string|undefined="Azure";
let xyz:any=["abc","def",""]; //any will allow anythng like array or string or number or undefnined
let abc:any=undefined;//true//123//"abc"; //so should be avoided
var z:any=10;
z=true;
//j=10;//error // not dynamic type
console.log(i);
console.log(j);
console.log(z);

let x1: number =10;
var y1:number= 20;
if(true)
{
    let x1:number =100; //locally 100
    var y1: number =200;
    console.log(x1);
    console.log(y1);
}
console.log('Outside block')
console.log(x1);
console.log(y1);

var q = 5; 
//hoisting: using var 
console.log(q); //it will prompt for an error on IDE, but executes
//But the output iwll be undefined.
//var q = 5; 

//hoisting: using let keyword //throws a compiler error 
// console.log(r);
// let r=300;

//earlier no return types  //void,undefined,any no return type; // number has a return type
//NAMED FUNCTION
function add(x:number, y:number) : number//number  return a
{
     return x+y;
}

//add(10); //demands 2 params
var result1=add(10,20);
console.log(`Result of named fn add(10,20)= ${result1}`);
console.log('Result =' + result1);

var add2=function(x:number, y:number) :number
{
    return x+y;
}
//how to an invoke anonymous fns
//var name(pram1,param2)
var result2=add2(30,40);
console.log(`Result of anonymous fn add2(30,40)= ${result2}`);
console.log('Result2=' + result2);

//Arrow Function
var add3= (x:number, y:number) :number  => x+y;
var resultarrowfn = add3(40,50);
console.log(`Result of Arrow Fn => ${resultarrowfn}`);



