/*
  ES5û�п鼶������ֻ�к���������
*/

for(var j = 0; j<6;j++){
    console.log(j);
    var temp = 'temps';
}
console.log(temp);//'temps'
console.log(j);

function fn(){
    var fnvalue = 'value';
}

//console.log(fnvalue);//fnvalue is not defined

console.log("**************");
//problem

function test(){
    var arr = new Array();
    for(var i = 0; i <6 ; i++){
        arr[i] = function(){
            return i;
        }
    }
    console.log('i---'+i);
    return arr;
}

var arrObj = new test();

console.log(arrObj[0].toString());
console.log(arrObj[0]());

console.log("**************");
function test1(){
    var arr = new Array();
    for(var i=0;i<6;i++){
        arr[i] = function(j){
            return function(){
                return j;
            }
        }(i)
    }
    return arr;
}

var arrObj1 = new test1();
console.log(arrObj1[0]());
