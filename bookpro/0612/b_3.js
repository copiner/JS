/*
��ͷ��������û���Լ���this�������ڲ���thisָ�����������this��
���ָ���ڶ���ʱ���Ѿ�ȷ���������ڵ���ʱָ����ִ�л����ģ�����������
*/
function foo() {
    console.log("id1:", this.id);
    console.log("this1:", this);
    setTimeout(() => {
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
// id2: 42
// this2: {id: 42}

/*
�ڶ���׶Σ����ú���ǰ����foo������this��ֵ����ȷ����
����ͷ������this�Զ���׶ο�ʼ��ָ��foo������this��
*/