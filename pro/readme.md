### ����ԭ�Ͷ��󶼼̳���Object.prototype������Object.prototype����



��⣺
function Foo () {}
let foo = new Foo();
let obj = { show: function (){}};

1 new ������function/object��prototype
foo.__proto__ === Foo.prototype; // true
foo.prototype; // undefined

2 ����function/object�Ĺ��캯�����̳���Function.prototype
Foo.__proto__ === Function.prototype; // true 
obj.show.__proto__ === Function.prototype; // true
Object.__proto__ === Function.prototype; // true

3 ����ԭ�Ͷ��󶼼̳���Object.prototype������Object.prototype����
Foo.prototype.__proto__ === Object.prototype; // true
obj.show.prototype.__proto__ === Object.prototype; // true
Function.prototype.__proto__ === Object.prototype; // true
Object.prototype.__proto__ === null; // true