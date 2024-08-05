//class

class user{
private _courseCount=1;
    constructor(public email:string,public name:string){
        
    }
    get getAppleEmail():string{
        return `apple${this.email}`
    
    }
    get courseCount():number{
        return this.courseCount;
    }
    set courseCount(courseNum){
        if(courseNum<=1){
            throw new Error("course should be more than 1")
        }
        this._courseCount=courseNum;
     
    }
    
}
const user_1 =new user("mohammednifli@gmail.com","jhon")
export{}