
var toArray = function(s){
    try{
        return Array.prototype.slice.call(s);
    } catch(e){
            var arr = [];
            for(var i = 0,len = s.length; i < len; i++){
                //arr.push(s[i]);
                   arr[i] = s[i];  //��˵������push��
            }
             return arr;
    }
}
