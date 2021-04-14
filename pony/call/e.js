
function fn1(){
   console.log(1);
}
function fn2(){
    console.log(2);
}

fn1.call(fn2);     //1
/*
���ȵ���call ����ʱ��Ҳ���� fn1.call.call(fn2); �Ƚ�fn2��Ϊ��ʱ�� context ����
Ȼ��fn1.call�������������Ϊʵ��ִ�к�������:context.fn = fn1.call;
ע�⣺fn1.call��ͨ��ԭ�����ҵ����յĶ���,�䱾��Ϊ Function.prototype.call
*/
fn1.call.call(fn2);  //2

function func(){
    console.log(this);
}
//func.call(func);     //���func
//func.call.call(func); //���window or  global


Function.prototype.es6Call = function (context) {
  var context = context  || global;//node
    context.fn = this;
    console.log(this);
  var args = [];
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']');
  }
    const result = context.fn(...args);
    //console.log(result);
  delete context.fn
  return result;
}

fn1.es6Call.es6Call(fn2);

//�����������temp����������thisָ��fn2

function temp(context) {
  var context = context  || global;//node
    context.fn = this;
    console.log(this);
  var args = [];
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']');
  }
    const result = context.fn(...args);
  //  console.log(result);
  delete context.fn
  return result;
}


temp.es6Call(fn2);

Function.prototype.call.call(fn2);


function add(c, d) {
  return this.a + this.b + c + d;
}

const obj = { a: 1, b: 2 };

add.es6Call(obj, 3, 4);

//add.es6Call(null, 3, 4);


//global
//for (var i in global){console.log(i)}
