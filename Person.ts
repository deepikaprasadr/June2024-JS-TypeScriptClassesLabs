//class
//inheritance
export class Person
{
    private personId:number=0;
   // public personName:string;
    public personName:string|undefined; //union type; for constructor overload

    constructor(); //Multiple constructor implementations are not allowed.ts(2392)
    constructor(pid:number,pname:string);
    constructor(pid?:number,pname?:string) //? means undefined
    {
        if(pid != null){
        this.personId=pid;
        this.personName=pname;
        console.log('Parameterised constructor')
    }
    else{
        console.log('Default constructor')
    }
    }
    showInfofn ():void;
    showInfofn (nm:string):void;

    showInfofn (nm?:string) : void
    {
        console.log('Id=' +  this.personId);
        console.log('Name=' + this.personName);
    }
}

let personObj= new Person(1,"Vinayak");
let personObj1= new Person(3,"DEEPIKA");
personObj.showInfofn();

//inheritance in Typescript
class Employee extends Person  //extends keyword like JAVA for inheritance
{
    empId: number=0;
//constructor(){} //it would not work here ; it needs to explicitly say super() keyword.
    constructor()
    {
    //super();
    //explicitly calling your base constructor.
    super(2,'Sammi'); //now calling parent constructor's parameterized constructor} 
    }
}
let empobj=new Employee();
//empobj.