//REVERSE A STRING
function reverse(str) {
    // Get the string value of the input field with id="str"
    str = document.getElementById("str").value;
    // split the string, reverse it and join
   str = str.split("").reverse().join("");
//link the result to Html
    document.getElementById("rev").innerHTML = str;
}

//Factorial
function FirstFactorial(num) { 
	num = document.getElementById("num").value;
  // set the value to the num and decrement it 
  for (var i = num - 1; i > 1; i--){
    //set num and multiply it by index
    num *= i;
	}
  document.getElementById("fac").innerHTML = num;
         
}

//Prime numbers
function isPrime(num) {
	num = document.getElementById("pnum").value
    //set prime to true assuming the number is prime
    var prime = true;
    //set to false if less than 2
    if(num < 2){
     prime = false;
      }
      //iterate through the numbers to check if isPrime
    for (var i = 2; i < num; i++) {
        if(num % i === 0){
             prime = false;
     }
 }
  	document.getElementById("prim").innerHTML = prime;
}

//Longest Word
function LongestWord(str) { 
  str = document.getElementById("word").value
  //split it at space
  str = str.split(" ");
  var Longest = 0;
  var word = null;
  str.forEach(function(value){
  if(Longest < value.length){
    Longest = value.length;
    word = value;
    }
  });

  document.getElementById("long").innerHTML = word; 
}     

//Letter Changes
function LetterChanges(str) { 
  str = document.getElementById("change").value;
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var newAlphabet = "bcdEfghIjklmnOpqrstUvwxyzA";
  var answer = "";
  // iterate through the string for changes
  forEach(str, function(value){
  if(alphabet.indexOf(value) !== -1){
    answer += newAlphabet.charAt(alphabet.indexOf(value));
  }else {
    answer += value;
  }
});
  document.getElementById("chge").innerHTML = answer;          
}


//Simple Adding
function SimpleAdding(num) { 
	num = document.getElementById("sadd").value;
  // code goes here 
  var number = 0;
  for (var i = 1; i <= num; i++) {
  	number  += i;
  }
  document.getElementById("add").innerHTML = number; 
} 


//Letter Capitalization

function LetterCapitalize(str) { 

	str = document.getElementById("dd").value;
  str = str.split(" ");
  for (var i = 0; i < str.length; i ++){
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  } 
  str = str.join(" ");
  document.getElementById("rin").innerHTML = str; 
}


//Simple Symbol
function SimpleSymbols(str) { 
  str = document.getElementById("sy").value
  var symbol = true;
  for (var i = 0; i < str.length; i++) {
    if ( str[i] >= 'a' && str[i - 1] != '+' && str[i + 1] != '+' ) {
        symbol = false;
        }
    }
    document.getElementById("sym").innerHTML = symbol;
}
  

 //CheckNums
 function CheckNums(num1,num2) { 
  //var y = num1, num2;
  num1, num2 = document.getElementById("num2").value;
  var bul;
  if(num2 > num1){
    bul = true;
  }else if(num2 < num1){
    bul = false;
  }else
  bul = "-1"; 
   document.getElementById("num1").innerHTML = bul;      
} 

//Time Convert
function TimeConvert(num) { 
num = document.getElementById("numb").value 
num = Math.floor(num / 60) +"hrs" + ":" + num % 60 +"min";
  document.getElementById("mun").innerHTML = num;     
}

//Alphabet Soup
function AlphabetSoup(str) { 
str = document.getElementById("ring").value;
  // code goes here  
  str = str.split("").sort().join(""); 
  document.getElementById("val").innerHTML =str;
         
}

//ABCheck
function ABCheck(str) { 
	str = document.getElementById("valu").value;
	var bool = false;
  for(var i = 0; i < str.length; i++){
    if(str[i] === 'a'){
      if(str[i+4] === 'b'){
        bool = true;
      } 
    } 
  }
  document.getElementById("ding").innerHTML = bool; 
         
}

//Vowel Count
function VowelCount(str) { 
	str = document.getElementById('vow').value;
  // code goes here 
  var vowel = "aeiouAEIOU";
  var count = 0;
  for(var i = 0; i <str.length ; i++){
    if (vowel.indexOf(str[i]) !== -1)  {
      count += 1;
    }
  }
  document.getElementById("wel").innerHTML = count; 
         
}

//Word Count
function WordCount(str) { 
	str = document.getElementById("wrd").value;
  // code goes here  
  str = str.split(" ").length;
  
  document.getElementById("cont").innerHTML = str; 
         
}

//XO
function ExOh(str) { 
	str = document.getElementById("xo").value;
  // code goes here  
	var co = 0;
  var cx = 0;
  var yOrN = false;
  str = str.split("") 
    for(var i = 0; i < str.length; i++) {
      if (str[i]==="o"){    
          co = co + 1;
      }else if (str[i]==="x"){
          cx = cx + 1;
      }    
    }
    if (co === cx){
    yOrN = true;
    }
    else{
    yOrN = false; 
    }  
    document.getElementById("exh").innerHTML = yOrN;    
}
   
 //Palindrome

 function Palindrome(str) {

 	str = document.getElementById("pal").value;
 	str = str.split(" ").join("").split("");

 	if(str.join("") === str.reverse().join("")){
 		var pos = true;
 	}else{
 		pos = false;
 	}
 	document.getElementById("dro").innerHTML = pos;
 }

 //ArithGeo
function ArithGeo(num){
	num = document.getElementById("arith").value
 	var first=num[0];
    var second=num[1];
    var third=num[2]; 
    if ((second-first) === (third-second)){
      var met = "Arithmetic";
      }
    else if ((second/first) === (third)/(second)){
       met = "Geometric";
      }
    else {
       met = -1;
    }
    document.getElementById("geo").innerHTML = met;
}

//LetterCount
function letterCount(str){
	document.getElementById("lett").value;
	var count = {};
  forEach(str, function(value){
    if(count.hasOwnProperty(value)){
      count[value] += 1;
    } else {
      count[value] = 1;
    }
  })
   
   document.getElementById("cnt").innerHTML = count;
         
}

//Prime
function prime(num) {
  if (num < 2) return false;
  return reduce(num, function(accum, curr, index){
    if(index % curr === 0){
      return accum;
}else{return !accum;}
  }, false);
}

//Creating each so my codes can work
function forEach(list, cb){
  if(Array.isArray(list)){
    for(var i = 0; i < list.length; i++){
      cb(list[i], i, list);
    }
  }else{
    for(var key in list){
      cb(list[key], key, list);
    }
  }
};
