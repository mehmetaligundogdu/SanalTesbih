let counter=0;
let counterDom=document.querySelector("#counter");
let arttırDom=document.querySelector("#arttır");
let azaltDom=document.querySelector("#azalt");
let resetDom=document.querySelector("#reset");
counterDom.innerHTML=counter;

arttırDom.addEventListener("click",clickEvent);
azaltDom.addEventListener("click",clickEvent);
resetDom.addEventListener("click",clickEvent);

function clickEvent(){
    console.log(this.id);
    if(this.id== "azalt"){
        counterDom.innerHTML=counter-=1
    }else if(this.id== "arttır"){
     counterDom.innerHTML=counter+=1  
    }else{
        counter=0;
        counterDom.innerHTML=counter;
    }
}