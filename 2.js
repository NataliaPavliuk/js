
function calculateSum(array) {
   return array.reduce((a, b) => a + b); 
}
console.log("Task 1:")
console.log(calculateSum([1,2,3,4,5]));


function isTriangle (a, b, c) {
    if ((a <= 0) || (b <= 0) || (c <= 0)) {
        return false;
    } 
    else {
        if ((a + b < c) || (a + c < b) || (b + c < a)) {
            return false;
      } 
      else {
      return true;
      }  
    } 
  }
console.log("\nTask 2:")
console.log(isTriangle(5,6,7)); 

console.log(isTriangle(2,9,3));


function isIsogram(str){
    return new Set(str.toLowerCase()).size === str.length
   }

console.log("\nTask 3:")
console.log(isIsogram('Dermatoglyphics')); 

console.log(isIsogram('abab'));

function isPalindrome(str) {
    str = str.toLowerCase();
    for (var i = 0; i < str.length/2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
          return false;
      }
    }
    return true;
   }

console.log("\nTask 4:")
console.log(isPalindrome ('Dermatoglyphics')); 

console.log(isPalindrome ('abbabba'));


function showFormattedDate(date){
return date.toLocaleString("en-GB", {day: "numeric"}) +' of '
+ date.toLocaleString("en-GB", { month: "short" })+', '
+ date.toLocaleString("en-GB", {year: "numeric" });
}
 
console.log("\nTask 5:")
console.log(showFormattedDate(new Date('05/12/22')));

function letterCount(str, letter) {
    if(str.length!=0){
    const reg = new RegExp(letter, 'g');
	return str.match(reg).length
    }
    else return 0;
};

console.log("\nTask 6:")

console.log(letterCount("Marry", "r")) 

console.log(letterCount("Barny", "y")) 

console.log(letterCount("", "z"))


function countRepetitions(array){
return array.reduce((count, cur) => (count[cur] = count[cur] + 1 || 1, count), {});
}

console.log("\nTask 7:")
console.log(countRepetitions(['banana', 'apple', 'banana']));

function calculateNumber(array){
    return array.reduce((acc, val) => {
        return (acc << 1) | val;
     });
}

console.log("\nTask 8:")
console.log(calculateNumber([0, 1, 0, 1])); 

console.log(calculateNumber([1, 0, 0, 1])); 
