/*
����fun()��ִ��ʱ�������һ������a��undefined����Ϊ�������Լ���ִ�л������ѯ������a��������������������������������ǰ�������Ǹ�ֵ�ǲ����Եģ�����ʱ�������undefined������fun()��ִ��ʱ�������һ������a��undefined����Ϊ�������Լ���ִ�л������ѯ������a��������������������������������ǰ�������Ǹ�ֵ�ǲ����Եģ�����ʱ�������undefined��
*/

var a = 10;

function fun(){
    console.log(a);//undefined

    var a = 20;

    console.log(a);//20
}

fun();

function func(){
    var a;
    console.log(a);//undefined

    a = 20;

    console.log(a);//20
}

func();
