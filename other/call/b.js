
var a = function(){
     console.log(this);    // 'littledu'
     console.log(typeof this);      //  Object
     console.log(this instanceof String);    // true
}
a.call('littledu');

//slice���ڲ�ʵ��
Array.prototype.slice = function(start,end){
     var result = new Array();
     start = start || 0;
     end = end || this.length; //thisָ����õĶ��󣬵�����call���ܹ��ı�this��ָ��Ҳ����ָ�򴫽����Ķ������ǹؼ�
     for(var i = start; i < end; i++){
          result.push(this[i]);
     }
     return result;
}
