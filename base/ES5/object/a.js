const name = 'tt';
let O = function(name){
 this.name = name || 'world';
};
O.prototype.hello = function(){
 return function(){
  console.log('hello ' + this.name);
 };
};
let o = new O;
let hello = o.hello();
hello();
