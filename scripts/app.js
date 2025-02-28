console.log("JS Loaded!");
let userInput= document.querySelector("#nummberInput");

userInput.addEventListener("input",()=>{
    if(userInput.value<=-10||userInput.value>=10){
        alert(" The number should be between -10 and 10");
    }
});

let fruit={
    name:"Mango",
    color:"Yello",
    taste:"Sweet"
};

let fruitName=document.querySelector(".fruitName");
let str=`Name: ${fruit.name}`;
fruitName.innerHTML=str;
let fruitColor=document.querySelector(".fruitColor");
let stri=`Color: ${fruit.color}`;
fruitColor.innerHTML=stri;
let fruitTaste=document.querySelector(".fruitTaste");
let strn=`Taste: ${fruit.taste}`;
fruitTaste.innerHTML=strn;