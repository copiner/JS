### Global ����

Global�������˵��ECMAScript�����ر��һ�������ˣ���Ϊ�������ʲô�Ƕ��Ͽ�����������ǲ����ڵġ�ECMAScript�е�Global������ĳ������������Ϊһ���ռ��ġ����׶�����������ġ�

���仰˵���������κ�������������Ժͷ��������ն����������Ժͷ�������ʵ�ϣ�û��ȫ�ֱ�����ȫ�ֺ�����������ȫ���������ж�������Ժͺ���������Global��������ԡ�����isNaN()��isFinite()��parseInt()��parseFloat()��ʵ����ȫ����Global����ķ���������֮�⡢Global���󻹰�������һЩ������

#### URI���뷽��

Global�����encodeURI()��encodeURIComponent()�������Զ�URI(uniform Resource Identifiers,ͨ����Դ��ʶ��)���б��룬�Ա㷢�͸����������Ч��URI�в��ܰ���ĳЩ�ַ������磬�ո�
��������URI���뷽���Ϳ��Զ�URI���б��룬�����������UTF-8�����滻������Ч���ַ����Ӷ���������ܹ����պ����⡣

���У�encodeURI()��Ҫ��������URI(���磬http://www.wrox.com/illegal value.html),��encodeURIComponent()��Ҫ���ڶ�URI�е�ĳһ�Σ�����ǰ��URI�е�illegal value.htm)���б��룬���ǵ���Ҫ�������ڣ�encodeURI()����Ա�������URI�������ַ����б��룬����ð�š���б�ܡ��ʺš��;��ֺţ���encodeURIComponent()���������ֵ��κηǱ�׼�ַ����б��롣

```javascript
var uri = "http://www.wrox.com/illegal value.htm#start";

console.log(encodeURI(uri));

console.log(encodeURIComponent(uri));
```
ʹ��encodeURI()�����Ľ���ǳ��˿ո�֮��������ַ���ԭ�ⲻ����ֻ�пո��滻����%20����encodeURIComponent()�������ʹ�ö�Ӧ�ı����滻���з���ĸ�����ַ�������Ҳ���ǿ��Զ�����URIʹ��encodeURI()����ֻ�ܶԸ���������URI������ַ���ʹ��encodeURIComponent()��ԭ�����ڡ�

һ�����ǣ�����ʹ��encodeURIComponent()������ʱ��Ҫ��ʹ��encodeURI()���࣬��Ϊ��ʵ���и��������ǶԲ�ѯ�ַ������������ǶԻ���URI���б��롣

��encodeURI()��encodeURIComponent()������Ӧ�����������ֱ���decodeURI()��decodeURIComponent()�����У�decodeURI()ֻ�ܶ�ʹ��encodeURI()�滻���ַ����н��룬���磬�����Խ�%20�滻��һ���ո񣬵��ǲ����%23���κδ�������Ϊ%23��ʾ���ֺţ�#���������ֺŲ���ʹ��encodeURI()�滻�ġ�ͬ���أ�decodeURIComponent()�ܹ�����ʹ��encodeURIComponent()����������ַ����������Խ����κ������ַ��ı��롣

```javascript
var uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start";
console.log(decodeURI(uri));

console.log(decodeURIComponent(uri));
```

�������uri������һ����encodeURIComponent()������ַ������ڵ�һ�ε���decodeURI()����Ľ���У�ֻ��%20���滻���˿ո񡣶��ڶ��ε���decodeURIComponent()����Ľ���У����������ַ��ı��붼���滻����ԭ�����ַ����õ���һ��δ��ת����ַ���������ַ���������һ����Ч��URI)��

#### eval()����
eval()����������һ��������ECMAScript����������ֻ����һ����������Ҫִ�е�ECMAScript(��javascript)�ַ�����
```javascript
eval("alert('hi')");
```
�ȼ���alert('hi');

�����������ִ����е���eval()����ʱ�����Ὣ����Ĳ�������ʵ�ʵ�ECMAScript�����������Ȼ���ִ�н�����뵽ԭλ�á�ͨ��eval()ִ�еĴ��뱻��Ϊ�ǰ����ôε��õ�ִ�л�����һ���֣���˱�ִ�еĴ���������ִ�л�����ͬ����������������ζ��ͨ��eval()ִ�еĴ�����������ڰ��������ж���ı�����
```javascript
var msg = "hello world";
eval('alert(msg)');
```
�ɼ�������msg����eval()���õĻ���֮�ⶨ��ģ������е��õ�alert()��Ȼ�ܹ���ʾ"hello world"��������Ϊ����ڶ��д������ձ��滻����һ�������Ĵ��롣ͬ���أ�����Ҳ������eval()�����ж���һ��������Ȼ�����ڸõ��õ��ⲿ�������������������

```javascript
eval("function sayHi(){ alert('hi');}");
sayHi();
```
��Ȼ������sayHi()����eval()�ڲ�����ġ������ڶ�eval()�ĵ������ջᱻ�滻�ɶ��庯����ʵ�ʴ��룬��˿�������һ�е���sayHi()�����ڱ���Ҳһ����

```javascript
eval("var mag = 'hello world';");
console.log(msg);
```
��eval()�д������κα������������ᱻ��������Ϊ�ڽ��������ʱ�����Ǳ�������һ���ַ����У�����ֻ��eval()ִ�е�ʱ�򴴽���

�ϸ�ģʽ�£����ⲿ���ʲ���eval()�д������κα������������ǰ���������Ӷ��ᵼ�´���ͬ�������ϸ�ģʽ�£�Ϊeval��ֵҲ�ᵼ�´���:
```javascript
"use strict"
eval = 'hi';//cause error
```
�ܹ����ʹ����ַ����������ǳ�ǿ�󣬵�Ҳ�ǳ�Σ�ա������ʹ��eval()ʱ���뼫Ϊ�������ر���������ִ���û��������ݵ�����¡�������ж����û�������в���վ���Ӧ�ó���ȫ�Ĵ��루����ν�Ĵ���ע�룩��

### Global���������
Global���󻹰���һЩ���ԣ����磬�����ֵundefined��NaN��Infinity����Global��������ԡ�
���⣬����ԭ���������͵Ĺ��캯������Object��Function��Ҳ����Global��������ԡ������г�Global������������ԡ�
```javascript
undeined        ����ֵundefined
NaN             ����ֵNaN
Infinity        ����ֵInfinity

Object          ���캯��Object
Array           ���캯��Array
Function        ���캯��Function
Boolean         ���캯��Boolean
String          ���캯��String
Number          ���캯��Number
Date            ���캯��Date
RegExp          ���캯��RegExp
Error           ���캯��Error

EvalError       ���캯��EvalError
RangeError      ���캯��RangeError
ReferenceError  ���캯��ReferenceError
SyntaxError     ���캯��SyntaxError
TypeError       ���캯��TypeError
URIError        ���캯��URIError
```
ECMAScript5 ��ȷ��ֹ��undefined��NaN����Infinity��ֵ����������ʹ�ڷ��ϸ�ģʽ��Ҳ�ᱨ����

### window����
ECMAScript��Ȼû��ָ�����ֱ�ӷ���Global���󣬵���Web��������ǽ����ȫ�ֶ�����Ϊwindow�����һ���ּ���ʵ�ֵġ���ˣ���ȫ�������������������б����ͺ������Ͷ���Ϊ��window��������ԡ�
```javascript
var color = 'red';

function sayColor(){
         console.log(window.color);
}
window.sayColor();//"red"
```
javascript�е�window������˰���ECMAScript�涨��Global����Ľ�ɫ�⣬���е��˺ܶ�������

��һ��ȡ��Global����ķ�����ʹ��һ�´���:
```javascript
var global = function(){
    return this;
}();
```
���ϴ��봴����һ���������õĺ�������ʽ������thisֵ����ǰ��������û����ȷָ��thsiֵ������£�������ͨ������������Ϊ����ķ���������ͨ������call()��apply()��this��ֵ����Global���󡣶�������ͨ���򵥵ط���this��ȡ��Global�������κ�ִ�л����¶��ǿ��еġ�


### Math����

ECMAScript��Ϊ������ѧ��ʽ����Ϣ�ṩ��һ��������λ�ã���Math������������JavaScriptֱ�ӱ�д�ļ��㹦����ȣ�Math�����ṩ�ļ��㹦��ִ������Ҫ��ܶࡣMath�����л��ṩ�˸��������Щ��������Ժͷ�����

#### Math���������
Math������������Դ�����ѧ�����п��ܻ��õ���һЩ����ֵ������:
```javascript
Math.E          ��Ȼ�����ĵ�����������e��ֵ
Math.LN10       10����Ȼ����
Math.LN2        2����Ȼ����
Math.LOG2E      ��2Ϊ��e�Ķ���
Math.LOG10E     ��10Ϊ��e�Ķ���
Math.PI         ����ֵ

Math.SQRT1_2    1/2��ƽ��������2��ƽ�����ĵ�����
Math.SQRT2      2��ƽ����
```
#### min()��max()����
Math���󻹰������෽�������ڸ�����ɼ򵥺͸��ӵ���ѧ����
���У�min()��max()��������ȷ��һ����ֵ�е���Сֵ�����ֵ�����������������Խ�������������������
```javascript
var max = Math.max(3,54,32,16);
console.log(max);//54

var min = Math.min(3,54,32,16);
console.log(min);//3
```

�����������������ڱ�������ѭ������if�����ȷ��һ���������ֵ����Сֵ��

Ҫ�ҵ������е�������Сֵ����������������ʹ��apply()������
```javascript
var value = [1,2,3,4,5,6,7,8];
var max = Math.max.apply(Math,value);
```
������ɵĹؼ��ǰ�Math������Ϊapply()�ĵ�һ���������Ӷ���ȷ����thisֵ��Ȼ�󣬿��Խ��κ�������Ϊ�ڶ���������

#### ���뷽��
Math.ceil()ִ���������룬�������ǽ���ֵ��������Ϊ��ӽ���������
Math.floor()ִ���������룬�������ǽ���ֵ��������Ϊ��ӽ���������
Math.round()ִ�б�׼���룬�������ǽ���ֵ��������Ϊ�ӽ���������
```javascript
console.log(Math.ceil(25.9));//26
console.log(Math.ceil(25.5));//26
console.log(Math.ceil(25.1));//26

console.log(Math.round(25.9));//26
console.log(Math.round(25.5));//26
console.log(Math.round(25.1));//25

console.log(Math.floor(25.9));//25
console.log(Math.floor(25.5));//25
console.log(Math.floor(25.1));//25
```

#### random()����
Math.random()�������ش��ڵ���0С��1��һ���������

����Math.random()��Math.floor()���Դ�ĳ��������Χ���ѡ��һ��ֵ��

```javascript
//ѡ��һ��1��10֮�����ֵ
var num = Math.floor(Math.random()*10+1);
```

```javascript
//ѡ��һ��2��10֮�����ֵ
var num = Math.floor(Math.random()*9+2);
```
��2����10Ҫ��9��������˿���ֵ����������9������һ�����ܵ�ֵ����2����������£���ʵ������ͨ��һ��������������ܵ�ֵ�������͵�һ�����ܵ�ֵ������
```javascript
function selectFrom(lowerValue,upperValue){
         var choices = upperValue - lowerValue + 1;
         return Math.floor(Math.random()*choices + lowerValue);
}

var num = selectFrom(2,10);
console.log(num);
```
����selectFrom()��������������Ӧ�÷��ص���Сֵ�����ֵ���������ֵ����Сֵ�ټ�1�õ��˿���ֵ��������Ȼ�����ְ���Щ��ֵ���õ���ǰ��Ĺ�ʽ�С�������ͨ������selectFrom(2,10)�Ϳ��Եõ�һ������2��10֮�䣨����2��10������ֵ�ˡ�����������������Է���ش����������ȡ��һ�����:

```javascript
var colors = ["red","green","blue","yellow","black","purple","brown"];
var color = colors[selectFrom(0,colors.length-1)];
console.log(color);
```
����������У����ݸ�selectFrom()�ĵڶ�������������ĳ��ȼ�1��Ҳ�����������һ���λ�á�