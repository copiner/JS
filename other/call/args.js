
/*
ÿ���������Ǽ�ͷ���ڱ�����ʱ�����Զ�ȡ���������������this �� arguments���ڲ���������������������ʱ��ֻ��������������Ϊֹ��
arguments ��һ��������������汣���ŵ��ú���ʱ�����ʵ�Σ���һ����������Ϊ0
*/

(function(age,name){
    console.log(arguments);		//[23,"XD"]
    console.log(arguments.length);	//2
    console.log(arguments[0]);		//23
    console.log(arguments[1]);		//XD
})(23,"XD");


(function(age){
    console.log(arguments[0]);		//23
    console.log(age);		//23
    arguments[0] = 18;
    console.log(age);		//18
})(23);

/*
arguments ��Ȼ����ͨ���±��ȡ���е�Ԫ�أ�Ҳ�� length ���ԣ�����ȴ����һ�����飬��˲���ʹ������ķ���

����ʹ��Array.prototype.slice.apply(arguments)��Array.prototype.concat.apply([], arguments)��argumentsת��Ϊ����������
*/

/*
arguments ����һ�� callee ���ԣ��������ָ�� arguments ���ں�������
*/
(function fun(){
   console.log(arguments.callee === fun);		//true
})();


//�� arguments �����жϴ��ݸ������Ĳ�������������ģ�⺯������

function fun(){
	if(arguments.length === 1){
		console.log(arguments[0]);
	}else if(arguments.length === 2){
		console.log(arguments[0] + arguments[1]);
	}
}

fun(18);	//18
fun(18,23);	//41
