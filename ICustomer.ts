import { Person } from "./Person";

export interface ICustomer{
    showInfo():void;
   // mailInfo();
}
//if you have additional functions to be used throughout the app, then EXPORT the function 

export function CallMefn()
{
    console.log('fn impl');
    let pobj=new Person();
    pobj.showInfofn(); 
}

export const PI:number=3.14;//not exported 