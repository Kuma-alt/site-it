
// alert(1)
// const a = 55555;
// alert( a );
// var b = 45 + 4;
// alert( b )
// {
// let c = 3;
// }
// //alert( c )
// confirm('idfgfghefgrhgksereghyreghyhhhhhghhhghhhjh');
// confirm('hello')
// confirm('demo javascript')
// var text = prompt('Input text:');
// console.log( text );
// var m1 = "a";
// var m2 = "b";
// console.log(m1 + ' і ' + m2)
// document.write('<h1>54555544454444<h1>')

function myFunc01() {
   console.log('a');
   console.log('b');
   }
function myAdd() {
	var R = getA() + getB();;
	var eR =document.getElementById('elR');
	eR.value = R;
}
function mySub() {
	var R = getA() - getB();;
	var eR =document.getElementById('elR');
	eR.value = R;
}
function myDiv() {
	var R = getA() / getB();;
	var eR =document.getElementById('elR');
	eR.value = R;
}
function myMult() {
	var R = getA() * getB();
	var eR =document.getElementById('elR');
	eR.value = R;
}
function getA() {
    let A = document.getElementById('elA');
    return Number(A.value);
}
function getB() {
    let B = document.getElementById('elB');
    return Number(B.value);
}