 
 //User

 type User={
    name:String;
    id:number;
 }

//Admin
 type Admin={
    name:string;
    id:number;
    role:string;

 }


 let Nifli: User| Admin ={name:"Nifli",id:12423}

 Nifli={name:"Nilfi",id:12423,role:"admin"}

 console.log(Nifli)