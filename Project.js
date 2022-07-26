console.clear()
 var mStr3="This is my test string to practice the javascript String function concepts. This is gonna be fun."
 console.log(mStr3.slice(0,75.2).length)
 var mStr2="This is gonna be fun."
 console.log(mStr2.length)
 console.log(mStr3.substr(0,4))
 console.log(mStr3.substr(76,4))
 console.log(mStr3.substr(0,12))
 console.log(mStr3.substr(-12))
 
 var str1='Today is';
 var str2=' A beautiful day '
 var str3=' In Hawaii. '
 console.log(str1+ ' ' +str2.toLowerCase().trim('')+ ' ' +str3.toLowerCase().trim(''))
 var mStr='Mo Tu We Th Fr Sa Su'
 console.log(mStr.toUpperCase().split())
 
 var charName="This is javascript playground"
 console.log(charName.charAt(6))

 console.log(charName.indexOf('javascript'))
 console.log(charName.slice(0,5))
 
 //conditional statement.
 //if,else if and else..
 //practice
 //var length=200;
// var breath=200;
 //if(length==breath){
   //console.log('rectangle')
 // }else{
  // console.log('not square')
 //}
 
// var num1=5;
// var num2=8;
// var num3=20;
//if(num1>num2&&num1>num3){
 // console.log(num1)
//}else if(num2>num1&&num2>num3){
 // console.log(num2)
// }else if(num3>num1&&num3>num2){
 // console.log(num3)
// }
// var enteredMarks=80;
 //if(enteredMarks<25){console.log("F")
 //}else if(enteredMarks>=25&&enteredMarks<45//){console.log("E")
//}else if(enteredMarks>=45&&enteredMarks<50){ //console.log("D")
//}else if(enteredMarks>=50&&enteredMarks<60){ //console.log("C")
//}else if(enteredMarks>=60&&enteredMarks<80){   //console.log("B")
//else if(enteredMarks>=80&&enteredMarks<100){ //console.log("A")
//}

//switch statement: it is used as a replacement 9f else,if and else if. it saves time.
//code sample

//var currentDay='Mon';
//switch(currentDay){
//case 'Mon':
//console.log('Timing:10:00-6:00')
//break;
//case 'Tue':
 // console.log('Timing:9:00-05:00')
 // default:
 // console.log('Timing:5:00-7:00')
//}

var monthNumber=6;
switch(monthNumber){
  case 1:
    console.log('Month=January/ntotal number of the days=31')
    break;
    case 2:console.log('Month=February/ntotal number of days=29')
    break;
    case 3:console.log('Month=March/ntotal number of days=31')
    break;
    case 4:console.log('Month=April/ntotal number of days=30')
    break;
    case 5:console.log('Month=May/ntotal number of days=31')
    break;
    case 6:console.log('Month=june/ntotal number of days=30')
    break;
  case 7:console.log('Month=July/ntotal number of days=31')
    break; 
    case 8:console.log('Month=August/ntotal number of days=31')
    break;
  case 9:console.log('Month=September/ntotal number of days=30')
    break;
  case 10:console.log('Month=October/ntotal number of days=31')
    break;
  case 11:console.log('Month=November/ntotal number of days=30')
    break;
  case 12:console.log('Month=December/ntotal number of days=31')
    break;
    default:
    console.log('Nothing')
    break;
}
var enteredAlphabets='J';
switch(enteredAlphabets){
  case 'A':console.log('A is a vowel')
  break;
  case 'B':console.log('B is a consonant')
  break;
  case 'C':console.log('C is a consonant')
  break;
  case 'D':console.log('D is a consonant')
  break;
  case 'E':console.log('E is a vowel')
  break;
  case 'F':console.log('F is a consonant')
  break;
  case 'G':console.log('G is a consonant')
  break;
  case 'H':console.log('H is a consonant')
  break;
  case 'I':console.log('I is a vowel')
  break;
  case 'J':console.log('J is a consonant')
  break;
  case 'K':console.log('K is a consonant')
  break;
  default:
  console.log('Error')
  break;
}

var enteredNumber=50;
switch(enteredNumber){
  case 70:console.log('70 is an even number')
  break;
  case 31:console.log('31 is an odd number')
  break;
  case 20:console.log('20 is an even number')
  break;
  case 53:console.log('53 is an odd number')
  break;
  default:console.log('RangeError')
}
var num1=1+5;
var num2=num1/4;
var num3=1+5;
var num4=num3/4;
console.log(num2+ " " +num4)

var a=1;
var b=2;
var c;
var d;
c=++b;
d=a++;
c++;
b++;
++a;
console.log(a + " " + b + " " + c)

var input=7;
var output1=++input + ++input + ++input;
var output2=++input + ++input + ++input;
var output3=input++ + ++input + input++;
console.log(output1+" "+ output2+" "+ output3);

var x=0;
console.log(x++)
console.log(x=x+1)
console.log(x+=1)

var x=1;
console.log(x--);
console.log(x-=1)
console.log(x=x-1)

var num9=100;
num9+=5*10/2
console.log(num9)

var num7=100;
num7*=2*10/5;
 console.log(num7)
 
var num8=100;
 num8=2*8-15;
 console.log(num8)
 

