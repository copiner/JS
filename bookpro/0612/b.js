/*
�ں����ڲ���һ���������this
this���õ��Ǻ���ִ�еĻ�������
*/
var color = 'red';
var o = {color:'blur'};

function sayColor(){
    console.log(this.color);
}

sayColor();//undefined

o.sayColor = sayColor;
o.sayColor();//blue


/*
������ֻ��һ������ָ��ı�������
ȫ�ֵ�sayColor()������o.sayColor()ָ�����Ȼ��ͬһ������
*/
