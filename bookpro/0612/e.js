/*
ECMAScript �еĺ����Ƕ�����˺���Ҳ�����Ժͷ�����
ÿ�������������������ԣ�
1��length ������ϣ�����յ����������ĸ���
2��prototype �� �Ǳ��� �������� ����ʵ���ͷ���������toString(),valueof()�ȷ���ʵ�ʱ�����prototype����

ÿ����������������������
apply();
call();
����һ��������
bind()
*/


function a(a){
    console.log(a);
}

function ab(a,b){
    console.log(a,b);
}

function n(){
    console.log('hi');
}


console.log(a.length);
console.log(ab.length);

console.log(n.length);
