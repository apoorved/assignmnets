let str = `Ram: I bought 2 apples for 20 rupees.
Sam: I bought 4 oranges for 2 dollars.
Shabhanna: I bought 10 milk packets for 2 dinars.`

// let regex=/(\w+):\sI\sbought\s(\d+)\s(.*)for\s(\d+)\s(\w+)./gm;
const regex=/(\w+):\sI\sbought\s(\d+)\s(.*)for\s(\d+)\s(\w+)./;
const splitByNewLine = (str) => str.split("\n");
function gettingData(str){
let strArr = splitByNewLine(str);
let value = [];
let obj = {};
for(let i=0; i<strArr.length; i++){
    value = strArr[i].match(regex);
    obj[i] = {names:value[1],quantity:value[2],items:value[3],price:value[4],currency:value[5],rate:(value[4]/value[2])};
       
}
return obj;
}

console.table(gettingData(str));

//remove extra variables,try array funcs,ES6
// const add = (a,b) => a + b ; 
