
function *gen(){
    yield 0;
    yield 1;
    return 2;
    yield 3;
}

let g = gen();
//console.log(g.next(),g.next(),g.next(),g.next());

console.log([...g]);

for(let foo of g){
    console.log(foo);
}
