### String����

String �������ַ����Ķ����װ���ͣ�����ʹ��String���캯��������
```javascript
var stringObject = new String("hello world");
```
String����ķ���Ҳ���������л������ַ���ֵ�з��ʵ������У��̳е�valueOf()��
toLocaleString()��toString()���������ض�������ʾ�Ļ����ַ���ֵ��

String���͵�ÿ��ʵ������һ��length���ԣ���ʾ�ַ����������ٸ��ַ�

String�����ṩ�˺ܶ෽��,���ڸ�����ɶ�ECMAScript���ַ����Ľ����Ͳ���
#### �ַ�����
charAt()��charCodeAt() : ���ڷ����ַ������ض��ַ�������������������һ��������
������0���ַ���λ�á����У�charAt()�����Ե��ַ��ַ�������ʽ���ظ���λ�õ��Ǹ��ַ���
charCodeAt()���ظ���λ�õ��Ǹ��ַ����ַ�����
```javascript
var stringValue = "hello world";
console.log(stringValue.charAt(1));//'e'

console.log(stringValue.charCode(1));//'101'
```
ECMAScript����������һ�����ʸ����ַ��ķ�������֧�ִ˷�����������У�����ʹ�÷����ż����������������ַ����е��ض��ַ�
```javascript
var stringValue = "hello world";
console.log(stringValue[1]);//'e'

```
#### �ַ�����������
concat(),���ڽ�һ�����ַ���ƴ������������ƴ�ӵõ������ַ�����
```javascript
var stringValue = "hello ";
var result = stringValue.concat("world");
console.log(result);//'hello world'
console.log(stringValue);//'hello'

```
ʵ���ϣ�concat()�������Խ���������������Ҳ����˵����ͨ����ƴ���������ַ���

```javascript
var stringValue = "hello";
var result = stringValue.concat("world","!");

console.log(result);//'hello world!'
console.log(stringValue);//'hello'
```
��Ȼconcat()��ר������ƴ���ַ����ķ�������ʵ����ʹ�ø���Ļ��Ǽӷ�������(+)��

ECMAScript���ṩ�������������ַ����������ַ����ķ�����
slice()��substr()��substring()��

�������������᷵�ر������ַ�����һ�����ַ���������Ҳ�������һ��������������һ������ָ�����ַ����Ŀ�ʼλ�ã��ڶ���������ʾ���ַ��������������

������˵��slice()��substring()�ĵڶ�������ָ���������ַ������һ���ַ������λ�á�
substr()�ĵڶ�������ָ�������Ƿ��ص��ַ����������û�и���Щ�������ݵڶ������������ַ����ĳ�����Ϊ����λ�á�

��concat()����һ����slice()��substr()��substring()Ҳ�����޸��ַ��������ֵ��ֻ�Ƿ���һ���������͵��ַ���ֵ����ԭʼ�ַ���û���κ�Ӱ�졣

```javascript
var stringValue = "hello world";
console.log(stringValue.slice(3));//"lo world"
console.log(stringValue.substring(3));//"lo world"
console.log(stringValue.substr(3));//"lo world"

console.log(stringValue.slice(3,7)));//"lo w"
console.log(stringValue.substring(3,7));//"lo w"
console.log(stringValue.substr(3,7));//"lo worl"
```
�ڴ��ݸ���Щ�����Ĳ����Ǹ�ֵ������£����ǵ���Ϊ�Ͳ�����ͬ�ˡ����У�slice()�����Ὣ����ĸ�ֵ���ַ����ĳ�����ӣ�substr()���������ĵ�һ�����������ַ������ȣ��������ĵڶ�������ת��Ϊ0�����substring()����������и�ֵ������ת��Ϊ0��
```javascript
var stringValue = "hello world";
console.log(stringValue.slice(-3));//"rld"
console.log(stringValue.substring(-3));//"hello world"
console.log(stringValue.substr(-3));//'rld'

console.log(stringValue.slice(3,-4));//"lo w"
console.log(stringValue.substring(3,-4));//"hel"
console.log(stringValue.substr(3,-4));//''
```
�ڸ�slice()��substr()����һ����ֵ����ʱ�����ǵ���Ϊ��ͬ������-3�ᱻת��Ϊ8��ʵ�����൱�ڵ�����slice(8)��substr(8)������substring()�����򷵻���ȫ�����ַ�������Ϊ����-3ת����0

���ڶ��������Ǹ���ʱ����������������Ϊ������ͬ��

slice()������ѵڶ�������ת��Ϊ7������൱�ڵ�����slice(3,7)

substring()������ѵڶ�������ת��Ϊ0��ʹ���ñ����substring(3,0),����������Ὣ��С������Ϊ��ʼλ�ã����ϴ������Ϊ����λ�ã���������൱�ڵ�����substring(0,3)��

substr()Ҳ�Ὣ�ڶ�������ת��Ϊ0����Ҳ����ζ�ŷ��ذ�������ַ����ַ�����Ҳ�ͷ���һ�����ַ�����

#### �ַ���λ�÷���
indexOf()��lastIndexOf()���������������Ǵ�һ���ַ������������������ַ�����Ȼ�󷵻����ַ�����λ�ã����û���ҵ������ַ������򷵻�-1��

�������������������ڣ�indexOf()�������ַ�����ͷ����������ַ�����lastIndexOf()�����Ǵ����ַ�����ĩβ��ǰ�������ַ�����
```javascript
var stringValue = 'hello world';
console.log(stringValue.indexOf('o');//4
console.log(stringValue.lastIndexOf('o'));//7
```
���������������Խ��տ�ѡ�ĵڶ�����������ʾ���ַ����е��ĸ�λ�ÿ�ʼ���������仰˵��indexOf()��Ӹò���ָ����λ��������������Ը�λ��֮ǰ�������ַ�����lastIndexOf()����ָ����λ����ǰ���������Ը�λ��֮��������ַ�
```javascript
var stringValue = 'hello world';
console.log(stringValue.indexOf('o',6);//7
console.log(stringValue.lastIndexOf('o',6));//4
```
��ʹ�õڶ�������������£�����ͨ��ѭ������indexOf()����lastIndexOf()���ҵ�����ƥ������ַ�����
```javascript
var stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
var positions = new Array();
var pos = stringValue.indexOf('e');
while(pos > -1){
          positions.push(pos);
          pos = stringValue.indexOf('e',pos + 1);
}
console.log(positions);//"3,24,32,35,52"
```
#### trim()����
ECMAScriptΪ�����ַ���������trim()��������������ᴴ��һ���ַ����ĸ�����ɾ��ǰ�ü���׺�����пո�Ȼ�󷵻ؽ����
```javascript
var stringValue = '  hello world ';
var trimmedStringValue = stringValue.trim();
console.log(stringValue);
console.log(trimmedStringValue);
```
�����������֧�ָ÷�����һЩ�������֧�ַǱ�׼��trimLeft()��trimRight()�������ֱ�����ɾ���ַ�����ͷ��ĩβ�Ŀո�

#### �ַ�����Сдת������
ECMAScript���漰�ַ�����Сдת���ķ�����4����
toLowerCase()��toLocaleLowerCase()��toUpperCase()��toLocaleUpperCase()��
```javascript
var stringValue = 'hello world';
console.log(stringValue.toLocalUpperCase());
console.log(stringValue.toUpperCase());

console.log(stringValue.toLocaleLowerCase());
console.log(stringValue.toLowerCase());
```
#### �ַ�����ģʽƥ�䷽��
String���Ͷ����˼����������ַ�����ƥ���ģʽ������
һ��match()���������ַ����ϵ�����������������������RegExp��exec()������ͬ��
match��������ֻ����һ��������Ҫô��һ��������ʽ��Ҫô��һ��RegExp����
```javascript
var text = "cat,bat,sat,fat";
var pattern = /.at/;

//== pattern.exec(text)

var matches = text.match(pattern);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern.lastIndex);
```
�����е�match()��������һ�����飻�������RegExp�����exec()���������ݱ����е��ַ�����Ϊ��������ôҲ��õ�������ͬ�����飻
����ĵ�һ����������ģʽƥ����ַ�����֮���ÿһ�����У���������������ʽ�еĲ�����ƥ����ַ���

����serach()���������������Ψһ������match()�����Ĳ�����ͬ�����ַ�����RegExp����ָ����һ��������ʽ��
search()���������ַ����е�һ��ƥ��������������û���ҵ�ƥ����򷵻�-1�����ң�serach()����ʼ���Ǵ��ַ�����ͷ�����Ҳ���ģʽ��
```javascript
var text = "cat,bat,sat,fat";
var pos= text.serach(/at/);
console.log(pos);//1
```
������е�search()��������1����"at"���ַ����е�һ�γ��ֵ�λ�á�

����Ϊ�˼��滻���ַ����Ĳ�����ECMAScript�ṩ��replace()������

�÷�������������������һ������������һ��RegExp�������һ���ַ���������ַ������ᱻת����������ʽ�����ڶ�������������һ���ַ�������һ�������������һ���������ַ�������ôֻ���滻��һ���ַ�����Ҫ���滻�������ַ�����Ψһ�İ취�����ṩһ��������ʽ������Ҫָ��ȫ�֣�g)��־��
```javascript
var text = "cat,bat,sat,fat";
var result = text.replace('at','ond');
console.log(result);//"cond,bat,sat,fat"

result = text.replace(/at/g,'ond');
console.log(result);//"cond,bond,dond,fond"
```
��������У����ȴ���replace()���������ַ���"at"���滻�õ��ַ���"ond"���滻�Ľ���ǰ�"cat"��Ϊ��"cond",���ַ����е������ַ�û���ܵ�Ӱ�졣Ȼ�󽫵�һ�������޸�Ϊ����ȫ�ֱ�־��������ʽ���ͽ�ȫ��"at"���滻Ϊ��"ond"��

����ڶ����������ַ���,��ô������ʹ��һЩ������ַ����У���������ʽ�����õ���ֵ���뵽����ַ����С�

�����г�ECMAScript�ṩ����Щ������ַ�����

`
$$ ------ $

$& ------ ƥ������ģʽ�����ַ�������RegExp.lastMatch��ֵ��ͬ

$' ------ ƥ������ַ���֮ǰ�����ַ�������RegExp.leftContext��ֵ��ͬ

$` ------ ƥ������ַ���֮������ַ�������RegExp.rightContext��ֵ��ͬ

$n ------ ƥ���n������������ַ���������n����0~9�����磬$1��ƥ���һ������������ַ�����
$2��ƥ��ڶ�������������ַ������Դ����ƣ����������ʽ��û�ж��岶���飬��ʹ�ÿ��ַ���

$nn ------ ƥ���nn������������ַ���������nn����01~99�����磬$01��ƥ���һ������������ַ�����$02��ƥ��ڶ�������������ַ������Դ����ơ����������ʽ��û�ж��岶���飬��ʹ�ÿ��ַ�����
`

ͨ����Щ������ַ����У�����ʹ�����һ��ƥ�����е����ݣ�������ʾ
```javascript
var text = 'cat,bat,sat,fat';
result = text.replace(/(.at)/g,"word($1)");
console.log(result);//word(cat),word(bat),word(sat),word(fat)
```
�ڴˣ�ÿ����'at'��β�ĵ��ʶ����滻�ˣ��滻�����'word'���һ��Բ���ţ���Բ�������Ǳ��ַ�������$1���滻�ĵ��ʡ�

replace()�����ĵڶ�������Ҳ������һ����������ֻ��һ��ƥ�������ģʽƥ����ַ�����������£����������������3��������

ģʽ��ƥ���ģʽƥ�������ַ����е�λ�ú�ԭʼ�ַ�����

��������ʽ�ж����˶�������������¡����ݸ������Ĳ���������ģʽ��ƥ�����һ���������ƥ����ڶ����������ƥ����......��

���������������Ȼ�ֱ���ģʽ��ƥ�������ַ����е�λ�ú�ԭʼ�ַ�����

�������Ӧ�÷���һ���ַ�������ʾӦ�ñ��滻��ƥ���ʹ�ú�����Ϊreplace()�����ĵڶ�����������ʵ�ָ��Ӿ�ϸ���滻����
```javascript
function htmlEscape(text){
    return text.replace(/[<>"&]/g,function(match,pos,originalText){
        switch(match){
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            case "\"":
                return "&quot;";
        }
    });
}

console.log(htmlEscape(
    "<p class=\"greeting\">Hello world!</p>"
));
//&lt;p class=&quot;greeting&quot;&gt;Hello world!&lt;/p&gt;

```
�������Ϊ����HTML���붨���˺���htmlEscape(),��������ܹ�ת���ĸ��ַ���С�ںš����ںš��ͺ��Լ�˫���š�ʵ������ת�����򵥷�ʽ������ʹ��������ʽ�����⼸���ַ���Ȼ����һ���ܹ����ÿ��ƥ����ַ������ض���HTMLʵ��ĺ�����

���һ����ģʽƥ����йصķ�����split(),����������Ի���ָ���ķָ�����һ���ַ����ָ�ɶ�����ַ����������������һ�������С��ָ����������ַ�����Ҳ������һ��RegExp��������������Ὣ�ַ�������������ʽ����

split()�������Խ��ܿ�ѡ�ĵڶ�����������������ָ������Ĵ�С���Ա�ȷ�����ص����鲻�ᳬ���ȶ��Ĵ�С��

```javascript
var colorText = "red,blue,green,yellow";
var colors1 = colorText.split(",");
var colors2 = colorText.split(",",2);
var colors3 = colorText.split(/[^\,]+/);

console.log(colors1);
console.log(colors2);
console.log(colors3);
```
��������У�colorText�Ƕ��ŷָ�����ɫ�ַ��������ڸ��ַ�������split(",")��õ�����������ɫ�������飬���ڷָ��ַ����ķָ����Ƕ��š�Ϊ�˽�����ض̣�����ֻ�����������Ϊsplit()�������ݵڶ�������2�����ͨ��ʹ��������ʽ��������ȡ�ð��������ַ������顣

��Ҫע����ǣ������һ�ε���split()���ص������У���һ������һ�����������ַ�����֮���Ի�����������Ϊͨ��������ʽָ���ķָ������������ַ����Ŀ�ͷ�������ַ���"red")��ĩβ�������ַ���"yellow")��

��split()��������ʽ��֧�������������

#### localeCompare()����
��������йص����һ���������÷����Ƚ������ַ���������������ֵ�е�һ����

1������ַ�������ĸ����Ӧ�������ַ�������֮ǰ���򷵻�һ��������������������-1�������ֵҪ��ʵ�ֶ�������

2������ַ��������ַ����������򷵻�0;

3������ַ�������ĸ����Ӧ�������ַ�������֮���򷵻�һ��������������������1��������qiqi�����ʵ�ֶ�������

```javascript
var stringValue = 'yellow';
console.log(stringValue.localeCompare('brick'));
console.log(stringValue.localeCompare('yellow'));
console.log(stringValue.localeCompare('zoo'));
```
������ӱȽ����ַ���"yellow"�����⼸��ֵ:"brick","yellow"��"zoo"����Ϊ"brick"����ĸ��������"yellow"֮ǰ������localeCompare()������1����"yellow"����"yellow",���Է���0�����"zoo"����ĸ��������"yellow"���棬����localeCompare()������-1��

ע�⣬��ΪlocaleCompare()���ص�����ȡ����ʵ�֣��������������������ʾ������ʹ�����������

```javascript
function determineOrder(value){
         var result = stringValue.localeCompare(value);
         if(result < 0){
           return -1;
         } else if(result > 0){
           return 1;
         } else {
           return 0;
         }
}

determineOrder("brick");
determineOrder("yellow");
determineOrder("zoo");
```
localeCompare()�����Ƚ����ڲ�ͬ�ĵط�����ʵ����֧�ֵĵ��������Һ����ԣ������������������Ϊ��

#### fromCharCode()����

���⣬String���캯��������һ����̬������fromCharCode()����������������ǽ���һ�����ַ����룬Ȼ������ת��һ���ַ������ӱ��������������������ʵ������charCodeAt()ִ���෴�Ĳ�����

```javascript

console.log(String.fromCharCode(104,101,108,108,111));//"hello"
```
