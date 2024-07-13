//GENERIC CLASS ; how to limit to custom type?
//Type2: limiting Generic class to accept only specific data types
type mycustomtype = string|number;

class GenericStore<T extends mycustomtype>
{
    private list: Array<T>; 
constructor()
{
    this.list = [];
}
addItemInStore(item:T)
{
    this.list.push(item);
    console.log('New item added' + item);
}

}
let genericStoreObject =  new GenericStore<string>(); //throws an error
genericStoreObject.addItemInStore("a");//throws an error
//let genericStoreObject1 =  new GenericStore<boolean>(); //throws an error
//genericStoreObject1.addItemInStore(1);//throws an error


//TYPE 1: GENERIC CLASS CAN accept any datatype
class Store<T>{

private list: Array<T>; 


constructor(){
    this.list = [];
}

addItemInStore(item:T)
{
    this.list.push(item);
    console.log('New item added' + item);
}

removeItemFromStore(){
    this.list.pop(); 
    console.log("Item removed");
}
//looping can be foreach loops- 2 types => for of , for in
displayRemainingItems()
{
    for(let item of this.list) 
        {
        console.log('Items are=' + item);// for of here item is object
        }

    for(let item in this.list)
    {
        console.log('Items are ='+this.list[item] );//for in here list[item] is accessed from an array
    }
}
}
//Generics type1: The class Store<T> can take any
let storeObject =  new Store<string>();
storeObject.addItemInStore("a");
storeObject.addItemInStore("b");
storeObject.addItemInStore("c");
storeObject.removeItemFromStore();
storeObject.displayRemainingItems();

let storeObject1 =  new Store<number>();
storeObject1.addItemInStore(1);
storeObject1.addItemInStore(2);
storeObject1.addItemInStore(3);
storeObject1.removeItemFromStore();
storeObject1.displayRemainingItems();

//Generic classes with multiple dataType
class StoreGenerics2<T,T1>
{
    list: Array<T> | undefined;
    name:T1 | undefined;

    constructor(){}
}
let store = new StoreGenerics2<string,number>();

//Method Generics
class StoreGenerics3
{
    print<T>(data:T){
        console.log(data);
    }
}
let mtdGenerics=new StoreGenerics3();