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
/*for(let i=0; i<strArr.length; i++){
    value = strArr[i].match(regex);
    obj[i] = {names:value[1],quantity:value[2],items:value[3],price:value[4],currency:value[5],rate:(value[4]/value[2])};
       
}
return obj;
}

console.table(gettingData(str));
*/
strArr.map(makeObj);
function makeObj(item){
    value = item.match(regex);
    obj[item] = {names:value[1],quantity:value[2],items:value[3],price:value[4],currency:value[5],rate:(value[4]/value[2])};

}
return obj;
}
console.table(gettingData(str));
//remove extra variables,try array funcs,ES6
/*┌─────────┬─────────────┬──────────┬─────────────────┬───────┬───────────┬──────┐
│ (index) │    names    │ quantity │      items      │ price │ currency  │ rate │
├─────────┼─────────────┼──────────┼─────────────────┼───────┼───────────┼──────┤
│    0    │    'Ram'    │   '2'    │    'apples '    │ '20'  │ 'rupees'  │  10  │
│    1    │    'Sam'    │   '4'    │   'oranges '    │  '2'  │ 'dollars' │ 0.5  │
│    2    │ 'Shabhanna' │   '10'   │ 'milk packets ' │  '2'  │ 'dinars'  │ 0.2  │
└─────────┴─────────────┴──────────┴─────────────────┴───────┴───────────┴──────┘

┌───────────────────────────────────────────────────┬─────────────┬──────────┬─────────────────┬───────┬───────────┬──────┐
│                      (index)                      │    names    │ quantity │      items      │ price │ currency  │ rate │
├───────────────────────────────────────────────────┼─────────────┼──────────┼─────────────────┼───────┼───────────┼──────┤
│       Ram: I bought 2 apples for 20 rupees.       │    'Ram'    │   '2'    │    'apples '    │ '20'  │ 'rupees'  │  10  │
│      Sam: I bought 4 oranges for 2 dollars.       │    'Sam'    │   '4'    │   'oranges '    │  '2'  │ 'dollars' │ 0.5  │
│ Shabhanna: I bought 10 milk packets for 2 dinars. │ 'Shabhanna' │   '10'   │ 'milk packets ' │  '2'  │ 'dinars'  │ 0.2  │
└───────────────────────────────────────────────────┴─────────────┴──────────┴─────────────────┴───────┴───────────┴──────┘


*/
