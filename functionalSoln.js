//longest word
function count(str){
	var coll = str.split(" ");
	return coll.reduce(function(accum, curr){
	//var longest;
		if(accum.length > curr.length){
			return accum;

		}else{
			return curr;
		}
	})
}




//letter reverse
function reverse(str){
	var coll = str.split("");
	return coll.reduce(function(accum, curr, index, arr){
		return accum + arr[arr.length - index - 1]
	},"");
}

//first factorial
function factorial(number){
  return Array.apply(0, Array(number)).reduce(function(accum, curr, index) { return accum + accum * index; }, 1);
}

// prime number
function isPrime(num){
	function isPrime(num){
	for(var i = 2; i < num; i++){
		if(num % i === 0){
			return false;
		}
		
	}
	return true;
}

function primeSieve(start, end){
	var primed = []
	for(var i = start; i < end; i++){
		if(isPrime(i)){
			primed.push(i); 
		}
	}
	return primed;
}


	
}
