
/*
�����������ͣ�Undefined Null Boolean Number String
�����������ͣ�
*/

/*
ECMAScript �����еĺ������ǰ�ֵ���ݵ�
����������ݻ�����������ʱ�������ݵ�ֵ�ᱻ���Ƹ�һ���ֲ�����
��������������������ECMAScript�ĸ�����˵������arguments�����е�һ��Ԫ�أ�
������������������͵�ֵʱ��������ֵ���ڴ��еĵ�ַ���Ƹ�һ���ֲ��������������ֲ�����
�ı仯�ᷴӳ�ں������ⲿ��
*/

function addTen(num){
    num += 10;
    return num;
}
var count = 20;

var result = addTen(count);
console.log(count)
console.log(result)

function setName(obj){
    obj.name = 'Nicholas';
}

var person = new Object();
setName(person);
console.log(person.name);

function setName1(obj){
    obj.name = 'Mechel';
    obj = new Object();
    obj.name = 'Grey';
}

var author = new Object();
setName1(author);
console.log(author.name);
