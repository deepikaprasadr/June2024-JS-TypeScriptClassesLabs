class WaitList{

    print<T>(data : T)
    {  
            if(typeof (data) == 'string')
            {
                console.log(data);    
            } 
     }
}

let waitlistObj = new WaitList();
waitlistObj.print("***WaitList Application***");