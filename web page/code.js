//alert("code.js");comment
document.write("<h1>hello world</H1>");
document.write("<hr>");
document.write("<p> welcome to javascript </p>");
//document.write("checking");
//alert ("this is an alert")
//console.log("login to the cosole")
//variables are the containers
/* variable names are case senstive
it may begine with letter,$, _(underscore)
conventionally we start with lowercase and the next word is capitilise
like myNameIsManish
*/

/*
var first name ="manish"; // string in double quotion
var last name ='kumar';// string in single quotion

var num1=5;// int numbers
var num2=2.5;// float

var isTrue;// boolean true/false
isTrue=true;

name= "Manish Kumar";

document.write ("my name is" + name);
*/
//casting and converting
/*
document.write(100 + number("25") +"br"); 
document.write(100 + parseInt("50") + "br");
document.write(100 + parseFloat ("2.5") +"br");
*/
//strings

var greeting= "hello";


document.write( greeting.length + "<br>" );
document.write( greeting.charAt(0) + "<br>" ) ;
document.write( greeting.indexOf(1) +  "<br>") ;
document.write( greeting.substring(1) + "<br>" ) ;

//numbers
document.write( 2 + 3 + " <br> ") ; //addition
document.write ( 2 * 3 + " <br> " ) ; //multiplication
document.write ( 3** 3 + " <br> " ) ; //exponential
document.write ( 10 % 3 + " <br>" ) ;//moduls
document.write ( 2 + 3 * 3+" <br> " ) ;//order of the opration
document.write ( 10 / 3 + " <br> " ) ; // float


var num=10;
num += 100; // -= , *= , /= 
document.write ( num + " <br> " ) ;

num ++ ;
document.write ( num + " <br><br> " ) ;

//math class

document.write ( Math.pow(2,3) + "<br>" ) ; 
document.write ( Math.sqrt(169) + " <br> " ) ;
document.write ( Math.round(2.6) + " <br> " ) ;

//user input 

var name = window.prompt ( "enter your name : " ) ;
alert ( " hello " + name ) ;

// getting html

var header = javascript.getElementById ( " 









