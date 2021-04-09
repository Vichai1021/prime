//My answer
var range = 100

for (var i=2; i <= range; i++) {
    var check = 0;

    
    for (var j =2; j < i; j++) {
        if (i % j == 0) {
            check = 1;
        }
    }

    if (i > 1 && check == 0) {
        console.log(i);
    }
}


//exercise answwer (checking + listing out)
function isPrime(num){
  for (var i=2; i<num; i++){
    if(num%i==0){
      return false;
    }
  }
  return true;
  }

console.log(isPrime(23));
console.log(isPrime(39));
console.log(isPrime(101));

for (var i= 2; i<=100; i++){
  if (isPrime(i)==true){
     console.log(i)
  }
 
}


