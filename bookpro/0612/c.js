/*
  ECMAScript 5 �淶������һ�������������ԣ�caller    ������������

��������б����ŵ��õ�ǰ������ ���������ã��������ȫ���������е��õ�ǰ����������ֵΪnull

�ϸ�ģʽ�»�������

*/

function outer(){
//    console.log(outer.caller.toString());
    inner();
}

function inner(){
    console.log(inner.caller);
    console.log(arguments.callee.caller);
}

outer();
