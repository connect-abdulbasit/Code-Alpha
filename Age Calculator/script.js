const btn=document.querySelector("button");
const input=document.querySelector("input");
const msg=document.querySelectorAll(".msg");
let age;
let calculate= ()=>{

    let date=new Date();
    date=[date.getFullYear(),date.getMonth()+1,date.getDate()]
    let userDate=input.value;
    userDate=userDate.split('-');
    let temp=date[2]-userDate[2];
    if (temp>=0) {
        age=[temp];
    }else{
       let one= new Date(date[0],date[1]-1,0).getDate();
        age=[one+temp];
        date[1]-=1;
    }
    console.log(age);
    temp=date[1]-userDate[1];
    if (temp>=0) {
        age.push(temp);
    }else{
        age.push(12+temp);
        date[0]-=1;
    }
    temp=date[0]-userDate[0];
    if (temp>=0) {
        age.push(temp);
    msg[0].innerText=age[2];
    msg[1].innerText=age[1];
    msg[2].innerText=age[0];
    }else{
        alert("Invalid age");
    }
}
window.addEventListener("load",()=>{
    calculate();
})
btn.addEventListener("click",()=>{
    calculate();
})
