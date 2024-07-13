//interface ICustomer is available for use
//class inherits another class //multiple inheritance like Java
//class implements Interface. We have to implement all the methods.
import { ICustomer, CallMefn,PI } from "./ICustomer";

//Now customer class is knowing that there is a dependency on ICustomer.ts
//also there will be a ICustomer.js generate along with Customer.js
//Note: In case of dependencies it has to get downloaded first for the class to work. 

export class Customer implements ICustomer{
    //inside a class we do not need var and let keywords; since by default it is public 
    //if these properties are outside the class we need the var and let 
 customerId:number|undefined;//default public
 customerName:string|undefined;//default public  

constructor()
{
    console.log('construcor executed');
    CallMefn();
    console.log(`"PI:" ${PI}`);

}
showInfo():void{
    console.log(`Customer Id= ${this.customerId}`); //this keyword is mandatory
    console.log(`Customer Id= ${this.customerName}`); //this keyword is mandatory
}

}