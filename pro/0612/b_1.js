/*
һ����˵��thisָ�������У����ã�ʱ���ڵ�ִ�л��� �Ķ���
����˵��thisָ�����ĵ�����
*/
var obj = {
    
    color:'red',
    
    a:function(){
        console.log(this.color);
    }
}

var b = obj.a;

obj.a()

b()


/*
var b = obj.a;

//==

var b = function(){
    console.log(this.color);
}

obj.a() ����ʱ�����ڻ�����obj
b()���ã������ڵ�ִ�л�����ȫ�ֻ���
*/
