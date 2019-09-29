
function foo() {
    console.log("id1:", this.id);
    console.log("this1:", this);
    setTimeout(function() {
        console.log("id2:", this.id);
        console.log("this2:", this);
    }, 0);
}

var id = 21;

foo();

// Chrome
// id1: 21
// this1: window
// id2: 21
// this2: window

foo.call({id: 42});

// Chrome
// id1: 42
// this1: {id: 42}
// id2: 21
// this2: window

/*
setTimeout�ص��Ĵ��붼����ȫ�������򻷾���ִ�еģ�
��ˣ�setTimeout�ص���������this��ֵ�ڷ��ϸ�ģʽ��ָ��window����
���ϸ�ģʽ����undefined
*/
