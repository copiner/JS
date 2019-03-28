function getSomething() {
    return "something";
}

function testPromise() {
    return Promise.resolve("hello promise");
}

async function testAsync() {
    return Promise.resolve("hello async");
}

async function test() {
    const v1 = await getSomething();
    const v2 = await testPromise();    
    const v3 = await testAsync();
    console.log(v1, v2, v3);
);
}

test();

/*
������ȵ��Ĳ���һ�� Promise ������ await ���ʽ���������������ȵ��Ķ�����

������ȵ�����һ�� Promise ����await ��æ�����ˣ�������������Ĵ��룬���� Promise ���� resolve��Ȼ��õ� resolve ��ֵ����Ϊ await ���ʽ����������
*/

