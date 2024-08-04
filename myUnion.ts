 
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





 //function parameter


 function getDbid(id: number|string){
    if(typeof id==="string"){
        id.toLowerCase()
    }
   
   

 }

 getDbid(3)
 getDbid("3")




 //array

 const data:number[]=[12,3,5,5]

 const data2:string[]=["1","2","3"];

   const data3:(string | number| boolean)[] =["fy",1,"l",true];


