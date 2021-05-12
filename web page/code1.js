//getting html
/*
var header = document.getElementById( "myHeader") ;
header.style="color: blue; background-color: red" ;
document.write(header.getAttribute("giraffe")) ;
header.innerHTML = " elephant " ;

//arrays
"<br>"
var luckyNumbers =[4,7,18,23, "twenty", false];
luckyNumbers [0] =90;
document.write(luckyNumbers[0] + "<br>");
document.write(luckyNumbers[1] + "<br>");
document.write(luckyNumbers .length);

//n dimensional arreys

var numberGrid=[ [0,1], [1,2]];
numberGrid [0][1] =99;

document.write(numberGrid [0][0] + "<br>");
document.write(numberGrid [0][1] + "<br>");

//array functions
var friends = new Array ();
friends.push("ginny" );
friends.push("noney" );
friends.push("rohit" );
//friends.pop (); pop means taking off the last name or item of the list 
document.write( friends + "<br>");
document.write( friends.indexOf("ginny") + "<br>");
document.write( friends.indexOf("noney") + "<br>");
document.write( friends.indexOf("manu") + "<br>");//if there is no item in the list we will get negative 1
document.write( friends.reverse() + "<br>");
document.write( friends.sort() + "<br>");

//objects

var student ={
	name : "manish",
	age:25,
	major:"physics",
	gpa:6,
	
}
student.name ="manish kumar";//we can modify the object using their name 
document.write (student.name + "<br>");
document.write (student.major + "<br>");
document.write (student.gpa + "<br>");

//funtions
 
 var sum = addNumbers(6,10);
 document.write(sum);
 
 function addNumbers(num1,num2){
	 return num1 + num2;
	 
 }
 */
 /*
//event handlers
function handleClick (element){
	alert ("click" + element.id);
}
 */
 /*
 
 //event handler form javascript
 
var header =document.getElementById("myHeader");
header.addEventListener("click", function(){
	alert("click "  +header.id+  " again");
});
 */
 
 /*
  
  //if statements
  var isStudent = true;
  var isSmart = true;
  if(isStudent&&isSmart)
  {
	  document.write("you are a student" + "<br>");
  } 
  else if(!isStudent&& isSmart) 
  {
	  document.write("you are not a student");
  }
  else (!isStudent && !isSmart)
  {
	  document.write("you are not a student also not smart");
  }
  
  */
  /*
  // number comparison <,>,==(double equals to equals equal),!=, <=,>=
  if(1<3){
	  document.write("comparison is true");
  } else{
	  document.write("comparison is not true");
  }
  */
  
  /*
  // switch statements
  var myGrade= "A";
  switch(myGrade){
	  case "A":
	  document.write("you pass");
	  break;
	  case "F":
	  document.write("you fail");
	  break;
	  default:
	  document.write("invalid grade");
	  
*/
//while loop (check the condition first and then execute the program)
/*
var index =1;
while (index<=5){
	document.write(index);
	index++;
}
	*/
	/*
	var index =9;
do{
	document.write(index);
	index++;
}	while (index<=5);
	 */
/*

	 //	 for loop
	 for(var i=0; i < 10 ;i++){
		 document.write(i);
		
	 }
*/
/*
var luckyNum = [4,7,18,23];
luckyNum.forEach(function(luckynum){
	document.write(luckyNum + "<br>" );
});	
*/ 
/*
//exception catching 

//var x=y+9;

try {
	throw "somthing went wrong"; // to through somthing 
	//var x= y+9; y is not defined
} catch (err){
	document.write (err) //catching error and printing it 
}finally{
	
	//this code always get executed
}
*/

/*
//calsses and objects
class book{
	constructor(title, author){
		this.title = title;
		this.author = author;
	}
	readBook(){ //readbook is a function in class we need not to type function to call it 
		document.write("Reading " + this.title + "by " + this.author);
	}
}
var book1 = new book("Harry Potter" ,"JK Rowling") ;
document.write(book1.title + "<br>");
book1.readBook();
*/

//getters and setters :-these are the functions which user get to access the attributes of classes and objects 
/*
	  class book{
	constructor(title, author){
		this.title = title;
		this.author = author;
	}
	
	get title (){
		document.write ("<p>getting title</p>");
		return this._title; //underscore is refering to the actual attribute
	}
	
	set title (title){
		document.write ("<p>setting title</p>");
		this._title = title;
	}
	
	    readBook(){  
		document.write("Reading " + this.title + "by " + this.author);
		}
	  }	
		var book1 = new book("Harry Potter" ,"JK Rowling") ;
        
		document.write(book1.title + "<br>");
        book1.readBook();
		
		*/
		// inheritance
class Chef {
	
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	makeChicken(){
		document.write("chif makes chicken <br> ");
	}
	makeCake(){
		document.write("chif makes cake <br> ");
	}
	makeSpacialDish(){
		document.write("chif make special dish <br> ");
	}
}

class ItalianChef extends Chef {
	
	constructor(name,age,origin){
		super(name,age);
		this.origin = origin;
	}
	makePasta(){
		document.write("The chif make pasta <br> ");
	}
	//overridden
	makeSpecialDish(){
		document.write ("chif make special fish <br> ");
	}
}
var myChef= new Chef("name","age");
myChef.makeChicken();

var myItalianChef= new ItalianChef("name","age","origin");
myItalianChef.makeChicken();
document.write (myItalianChef.age);
