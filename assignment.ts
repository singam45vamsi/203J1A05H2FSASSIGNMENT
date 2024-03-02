//1st task

let n:number=1;
var s:string='vamsi';
var b:boolean=false;
let arr:number[]=[1,2,3,4];
let t:[string,number]=["vamsi",20]
enum cars{"BMW","BENZ","AUDI","THAR"}

//3rd task

interface Person
{
    name:string;
    age:number;
    email:string;

}
const user:Person =
{
 name:"vamsi",
 age: 20,
 email:"203j1a05h2@raghuinstech.com"
}

//2nd task 
var num1:number;
var num2:number;
function add2(num1:number,num2:number)
   {
    return num1+num2;
   }
function capital(s:string)
{
    return s.charAt(0).toUpperCase()+s.slice(1);
}

//4th task

class Car
{
   make:string="BMW";
   model: string="B29";
   year:number=2024;
    displayInfo()
    {
        console.log("make:"+this.make);
        console.log("model:"+this.model);
        console.log("year:"+this.year)
    }
}
//5th task

let reverse=(arr)=>{
    for(let i=arr.length-1;i>=0;i--)
    {
        console.log(arr[i]);
    }
}
reverse([1,2,3,4,5]);