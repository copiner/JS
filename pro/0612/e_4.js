/*
bind
*/

var color = 'red';

var o = {color:'blue'}

function sayColor(){
    console.log(this.color);
}

sayColor();

var tempSayColor = sayColor.bind(o);
//tempSayColor()������thisֵָ��o
tempSayColor();//blue
