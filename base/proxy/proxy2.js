/*
(a === 1 && a === 2 && a === 3) === true
*/
let current = 0
Object.defineProperty(window, 'a', {
  get () {
    current++
    console.log(current)
    return current
  }
})
console.log(a === 1 && a === 2 && a === 3) // true


//多继承

let foo = {
  foo () {
    console.log('foo')
  }
}
let bar = {
  bar () {
    console.log('bar')
  }
}
// 正常状态下，对象只能继承一个对象，要么有 foo()，要么有 bar()
let sonOfFoo = Object.create(foo);
sonOfFoo.foo();     // foo
let sonOfBar = Object.create(bar);
sonOfBar.bar();     // bar
// 黑科技开始
let sonOfFooBar = new Proxy({}, {
  get (target, key) {
    return target[key] || foo[key] || bar[key];
  }
})
// 我们创造了一个对象同时继承了两个对象，foo() 和 bar() 同时拥有
sonOfFooBar.foo();   // foo 有foo方法，继承自对象foo
sonOfFooBar.bar();   // bar 也有bar方法，继承自对象bar
