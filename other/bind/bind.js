
/*
bind() �����ᴴ��һ���º�����
������º���������ʱ��bind() �ĵ�һ����������Ϊ������ʱ�� this��
֮���һ���в��������ڴ��ݵ�ʵ��ǰ������Ϊ���Ĳ���
*/

function foo(c, d) {
  this.b = 100
  console.log(this.a)
  console.log(this.b)
  console.log(c)
  console.log(d)
}
// ���ǽ�foo bind��{a: 1}
var func = foo.bind({a: 1}, '1st'); 
func('2nd'); // 1 100 1st 2nd
// ��ʹ�ٴ�callҲ���ܸı�this��
func.call({a: 2}, '3rd'); // 1 100 1st 3rd

var temp = foo.bind(null, '1st');
temp('2nd');

// �� bind ���صĺ�����Ϊ���캯����ʱ��
// bind ʱָ���� this ֵ��ʧЧ��������Ĳ�����Ȼ��Ч��
// ����ʹ��funcΪ���캯��ʱ��this����ָ��{a: 1}����this.a��ֵΪundefined������

// new func('4th'); //undefined 100 1st 4th


/*
es3bind
*/


Function.prototype.es3Bind = function (context) {
  if (typeof this !== "function") throw new TypeError('what is trying to be bound is not callback');
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  const fBound = function () {
    // ��ȡ�����Ĳ���
    var bindArgs = Array.prototype.slice.call(arguments);
    // ���غ�����ִ�н��
    // �жϺ�������Ϊ���캯��������ͨ����
    // ���캯��this instanceof fNOP����true�����󶨺�����thisָ���ʵ����������ʵ��������԰󶨺�����ֵ��
    // ����Ϊ��ͨ����ʱ��this ָ�� window����ʱ���Ϊ false�����󶨺����� this ָ�� context
    return self.apply(this instanceof fNOP ? this: context, args.concat(bindArgs));
  }
  // �����պ���
  var fNOP = function () {};
  // fNOP������prototypeΪ�󶨺�����prototype
  fNOP.prototype = this.prototype;
  // ���غ�����prototype����fNOP������ʵ��ʵ�ּ̳�
  fBound.prototype = new fNOP();
  // ���������൱��Object.create(this.prototype)
  return fBound;
}

//var func = foo.es3Bind({a: 1}, '1st');
//func('2nd');  // 1 100 1st 2nd
//func.call({a: 2}, '3rd'); // 1 100 1st 3rd
//new func('4th');  //undefined 100 1st 4th

/*
es6bind
*/

Function.prototype.es6Bind = function(context, ...rest) {
  if (typeof this !== 'function') throw new TypeError('invalid invoked!');
  var self = this;
  return function F(...args) {
    if (this instanceof F) {
      return new self(...rest, ...args)
    }
    return self.apply(context, rest.concat(args))
  }
}

//var func = foo.es3Bind({a: 1}, '1st');
//func('2nd');  // 1 100 1st 2nd
//func.call({a: 2}, '3rd'); // 1 100 1st 3rd
//new func('4th');  //undefined 100 1st 4th
