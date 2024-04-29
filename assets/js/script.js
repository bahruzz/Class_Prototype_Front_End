"use strict"


// function sumOfOddNums(arr){
//     let sum=0;
//     for (const item of arr) {
//         if(item%2==1){
//             sum+=item;
//         }

//     }
//     console.log(sum);
// }

// let nums=[1,4,5,6,9,8];
// sumOfOddNums(nums)




// function sumOfEvenNums(arr){
//     let sum=0;
//     for (const item of arr) {
//         if(item%2==0){
//             sum+=item;
//         }

//     }
//     console.log(sum);
// }

// sumOfEvenNums(nums);


// function checkOddNum(num){
//     return num %2 == 1;
// }

// function checkEvenNum(num){
//     return num %2 == 0;
// }

//  function sumOfNumsByCondition(arr,callback){
//         let sum=0;
//         for (const item of arr) {
//             if(callback(item)){
//                 sum+=item;
//             }

//         }
//         console.log(sum);
//     }



// let nums=[1,4,5,6,9,8];
// sumOfNumsByCondition(nums,checkEvenNum);

// sumOfNumsByCondition(nums,m=>m%2==1);
// sumOfNumsByCondition(nums,m=>m>5);

// let result=nums.filter(m=>m>5);
// console.log(nums);
// console.log(result);

// let result=nums.find(m=>m>5);
// console.log(result);

// let result=nums.findIndex(m=>m==5);
// console.log(result);

// class Animal{

//     constructor(height,width){
//         this.height=height;
//         this.width=width;
//     }

// }

// let animal=new Animal(100,200);
// console.log(animal.height);

// class Bird extends Animal{
//     constructor(a,b){
//         super(a,b);
//         this.name="Devequsu";
//     }
// }

// let bird =new Bird(100,200);
// console.log(bird.height);


// let name = "sasa";
// let surname=new String();
// surname="salam";
// console.log(surname);


// let isMarried=new Boolean();
// isMarried=true;
// console.log(isMarried);


// class Test{
//     constructor(name){


//         this.name=name

//     }
// }

// let test=new Test("salam");
// console.log(test.name);

// Test.prototype.surname="surname for test";

// Test.prototype.getname=function(){
//     console.log("this is the test name");
// }
// let test=new Test("salam");

// console.log(test.surname);

// test.getname();

// String.prototype.customContains=function(searchText){
//     return this.includes(searchText);
// }

// let name = "Reshad"

// let surname = "Agayev"

// console.log(name.customContains("t"));

// console.log(surname.customContains("a"));


// let date=new Date();

// let year=new date.getFullYear();
// let month=new date.getUTCMonth();
// let result="{month+1}-{year}";

// console.log(result);

// let data = Math.pow(2,4);

// console.log(data);

// let data = Math.sqrt(64);

// console.log(data);


/////DOM/////

// let elems=document.getElementsByTagName("h1");

// // console.log(h1);

// for (let i = 0; i < elems.length; i++) {
//     const element = elems[i];
//     console.log(element);
// }

// let elem =document.getElementsByClassName("test");
// console.log(elem);

// let elem=document.getElementById("products");
// console.log(elem);

let elems = document.querySelectorAll("#products h1");;

// elems[0].style.backgroundColor="Red"

// console.log(elems);

// for (let i = 0; i < elems.length; i++) {
//         const element = elems[i];
//         console.log(element);
//     }


// for (const item of elems) {
//     item.style.backgroundColor="Red"
// }

let h1 = document.querySelector("h1");
// console.log(h1.innerText);

// console.log(h1.innerHTML);

// h1.innerText="<span>Reshad</span> "
// h1.innerHTML="<span>Reshad</span> "

// h1.style.color="Teal";
// h1.style.margin="200px";

// h1.className="active salam";

// h1.classList.add("active");
// h1.classList.remove("product")
// console.log(h1.classList.contains("active"));
// h1.setAttribute("id","text")

// console.log(h1.getAttribute("id"));
// console.log(h1.hasAttribute("id"));

let button = document.querySelector(".add-product");
button.addEventListener("click", function () {
    this.style.backgroundColor="Magenta";
    h1.style.backgroundColor="Green";
    h1.style.color="White";
    h1.style.width="200px";
    let btnText=this.innerText
    this.innerText=h1.innerText
    h1.innerText=btn.innerText;
})














