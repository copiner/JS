//call

//'use strict'

var a = 9, b = 8;

function add(c, d) {
  return this.a + this.b + c + d;
}

const obj = { a: 1, b: 2 };

console.log(add.call(obj, 3, 4)); //10

console.log(add.call(null, 3,4));

//���ϸ�ģʽ�£���obj�滻Ϊnull��undefined��thisֵ��`�Զ�`ָ��ȫ�ֶ���������о���window����

/*
���ƣ���o�������һ��add���ԣ����ʱ�� this ��ָ���� o

o.add(5,7)�õ��Ľ����add.call(o, 5, 7)��ͬ

���Ǹ�����o�����һ�������add���ԣ�������������ǲ���Ҫ�ģ����Կ���ʹ��deleteɾ����

1. ��������Ϊ���������
o.fn = bar

2. ִ�иú���
o.fn()

3. ɾ���ú���
delete o.fn

*/
const o = {
  a: 1,
  b: 2,
  add: function(c, d) {
    return this.a + this.b + c + d
  }
};

console.log(o.add(3,4));


console.log(add.call(o,3,4));

console.log('-----------------------------');

/*
����ES3ʵ��call
*/


Function.prototype.es3Call = function (context) {
    var context = context || window;
    console.log(context);
    context.fn = this;//����this === function add(c,d){}
    console.log(context);
   var args = [];
    // arguments����������󣬱���֮ǰ��Ҫ���泤�ȣ�������˳���һ������
    //    console.log(...arguments);
    console.log(...arguments);
  for (var i = 1, len = arguments.length ; i < len; i++) {
	// ����object֮�ഫ��
    args.push('arguments[' + i + ']');
  }
    console.log(...args);
    
  var result = eval('context.fn('+args+')');
  delete context.fn;
  return result;
}



//console.error(add.es3Call(obj, 3, 4)); // 10
console.log(add.es3Call({ a: 3, b: 9 }, 3, 4)); // 19
//console.log(add.es3Call({ a: 3, b: 9 }, {xx: 1}, 4)); // 12[object Object]4

console.log('----------------------')
/*
 ES6 call ʵ��
*/
Function.prototype.es6Call = function (context) {
  var context = context || window;
  context.fn = this;
  var args = [];
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']');
  }
  const result = context.fn(...args);
  delete context.fn;    
  return result;
}

console.error(add.es6Call(obj, 3, 4));
console.log(add.es3Call({ a: 3, b: 9 }, {xx: 1}, 4)); // 12[object Object]4
