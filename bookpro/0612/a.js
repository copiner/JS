/*
�����ڲ����� arguments
arguments ӵ��һ������ callee ��������һ��ָ�룬ָ��ӵ�����arguments����ĺ���
*/

function factorial(num){
    if(num <=1){
        return 1;
    } else {
        return num*factorial(num-1);
    }
}

function factorial2(num){
    if(num <=1){
        return 1;
    } else {
        return num*arguments.callee(num-1);
    }
}

var trueFactorial = factorial2;

factorial = null;

console.log(trueFactorial(5));
