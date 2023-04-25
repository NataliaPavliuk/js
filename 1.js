var band = "океан ельзи"
var song = "місто весни"
var together = band + " " + song
var bandName="";

for(let i=0 ; i< together.length; i++){
    console.log(together.charAt(i));
}

for(let i=0 ; i< together.length; i++){
   bandName+=together.charAt(i);
   if(i==band.length){
    console.log("\nband name: "+ bandName)
   }
}

var factorial=1; 

for(let i = 1; i<11; i++){
    factorial*=i;
}
console.log("\nfactorial: " + factorial)
console.log("\nSwitch: ")

const number=2;
switch(number){
    case 0:
        console.log("Number is 0");
        break;
    case 1:
        console.log("Number is 1");
        break;
    case 2||3:
        console.log("Number is 2, maybe 3");
        break;
    default:
        console.log("Number is greaten than 3")
}