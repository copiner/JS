/*
��Ϊarguments�������������������ֻ�����������ƶ��ѣ���������û��slice�����������Array.prototype.slice.call(arguments, 1)������������argumentsת����һ�����������arguments����slice()����

Array.prototype.slice.call(arguments)�ܽ�����length���ԵĶ���ת������

��ʵ�������ڰ����������ת���������飬ʹ�������һϵ�з�����
������ת��������Ҫ�У�Array.from()��[].slice.call()(Array.prototype.slice.call()),��չ�������Ҳ�ܽ�ĳЩ���ݽṹת������
*/
function list(){
//    console.log(arguments.length);//{ '0': 1, '1': 2, '2': 3 }
    return Array.prototype.slice.call(arguments);
}

var list = list(1,2,3);//[1, 2, 3]
console.log(list);

var a={ length:3, '0': 1, '1': 2, '2': 3 }
console.log(Array.prototype.slice.call(a));
console.log(Array.prototype.slice.call(a, 2));

var b = { '0': 1, '1': 2, '2': 3 };
console.log(Array.prototype.slice.call(b));

