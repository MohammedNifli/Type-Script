
//This will make error

// class User{
//     private courseCount=1

// }

// class subUser extends User{
//     isFamily:boolean=true;
//     changeCourseCount(){
//         this.courseCount=1
//     }

// }


// using protected keyword
class User{
    protected courseCount=1

}

class subUser extends User{
    isFamily:boolean=true;
    changeCourseCount(){
        this.courseCount=4
    }

}