//ternary operator
for (var i=1; i<=100; i++){
    var f =i %3 ==0, b=i%5==0;
    console.log(f ? b? "Fizzbuzz" : "Fizz" : b ? "Buzz" : i);
}
//finding the largest number among the five
function getLargest(a,b,c,d,e){
    let numbers = [b,c,d,e];
    let largest = a;
  
    for(let i of numbers){
      if(i > largest){
        largest = i;
      }
    }
    return largest;
  }
  
  
  console.log(getLargest(46,58,57,44,33));

  //average marks of students

  var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];  
  
var Avgmarks = 0;  
  
for (var i=0; i < students.length; i++) {  
        Avgmarks += students[i][1];  
        var avg = (Avgmarks/students.length);  
}  
  
console.log("Average grade: " + (Avgmarks)/students.length);  
  
        if (avg < 60){  
          console.log("Grade : F");        
          }   
        else if (avg < 70) {  
                console.log("Grade : D");   
                  }   
        else if (avg < 80)   
             {  
                console.log("Grade : C");   
        } else if (avg < 90) {  
                console.log("Grade : B");   
        } else if (avg < 100) {  
                console.log("Grade : A");   
}  
//odd or even
for (var i=0; i<=15; i++){
    if (i%2==0)
    console.log(i + " is even");
    else {
        console.log(i + " is odd")
    }
}
//sum the multiples of 3 and 5 below 1000
let sum=0;
for (var i=0; i<=1000; i++){
    if(i%3==0 && i%5==0 ){
        sum+=i;
    }
}
console.log(sum);

//callback

function clap(hands, callback){
    console.log("clapping hands");
    callback();
}
function sing (){
    console.log("singing");
}
clap("I am clapping", sing)

//leap year or not

function leapyear(year) {
    if(year%100===0 && year%400===0 || year%4===0){
        return "Its leap year"
    }
    else{
        return "its not a leap year"
    }
  }
  console.log(leapyear(2020));
  console.log(leapyear(2011));
  
  //reading status
  
  var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) 
   {
    var book = library[i].author  + ' by ' + library[i].title;
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }
  
  
