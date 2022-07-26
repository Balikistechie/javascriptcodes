console.clear()
//we jave cases used in writing variables name which includes:
//camel case eg 'firstName'
//pascal case eg 'FirstName'
//snake case eg 'first_name'
// code sample:

var firstName='giafa';
var lastName='bolanle';
var code =`welcome ${firstName} ${lastName}`;
console.log(code)

//For numbers
//code sample

var $firstnum=6;
var $secondnum=8;
var $thirdnum=10;
var diff=$firstnum-$thirdnum;
console.log(diff)

var divByZero=$thirdnum/0;
console.log(divByZero)


//js numbers–functions
//1. parseInt-it is used to convert strung to number ouput.
var num1= "20";
console.log(parseInt(num1))

//2.tostring is used to convert number to string ouput.
var num3=3;
console.log(num3.toString())

//parseFloat() is used to returns flaoting numbers i.e decimals intergers
var num2="5.6";
console.log(parseFloat(num2))

//tofixed() is used to convert decimal number to a whole number.
var num4=7.563412;
console.log(num4.toFixed())
console.log(num4.toFixed(2))

let text = `He's often called "Johnny"`;
console.log(text)
let text2 ='The quick brown fox jumps over the lazy dog';
console.log(text2)
let str = "John";
let str2 = "Doe";
let text3 = `Welcome ${str}, ${str2}!`;
console.log(text3)

let price = 10;
let VAT = 0.25;
let total=`Total: ${(price* (1 + VAT)).toFixed(2)}`;
console.log(total)

var n=2;
 var p=4;
 var q=5;
 var w=3;
 if(!((p*q)/n <= (q*w)+ n/p))
 {
   console.log(++p + w++ +" "+ ++n)
}
else {
  console.log(--p + q--+" "+ --n)
 }
 
var btn=document.getElementById('logo');
var text=document.getElementById('textAnswer').value;

function myFunction(){
  var btn=document.getElementById('logo');
var text=document.getElementById('textAnswer').value;
let json=JSON.stringify(text)
document.body.innerHTML=json;
}