/*
�����������Ա���ֵʹ�������������Կ�ѡ����ʹ�ö�������������װ

���ʶ������ԣ�һ����ʹ�õ��ʾ����һ��ʹ�÷����ű�ʾ����
�����ű�ʾ��һ���ŵ��ǿ���ͨ����������������
*/

function display(type, args){

    var temp = '';
    if(typeof args.name == 'string'){
        temp += 'name : '+args.name;
    }

    if(typeof args.age == 'number'){
        temp += 'age: ' + args.age;
    }

    return temp;
}
var obj = {
    name:'Nich',
    age:29
}
var tt = display('01',obj)

console.log(tt);
