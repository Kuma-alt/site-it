function start() {
  var mainEl = document.getElementById('d1');
  var elC = document.getElementById('c');
  var elR = document.getElementById('r');
  var clr = document.getElementById( 'clr' );

  let H = document.createElement('h1');
  H.innerText = 'Lorem.ssss';
  mainEl.appendChild( H );

  let T = document.createElement('table');
  mainEl.appendChild(T);

  let TB = document.createElement('tbody');
  T.appendChild(TB);

 for ( let row=0; row<Number(elR.value); row++){
    let TR = document.createElement('tr');
  TB.appendChild(TR);
for ( let col=0; col<Number(elC.value); col++){
  let TD = document.createElement('td');
  TD.innerHTML = '&nbsp';
  TD.addEventListener('click', hClick);
  TR.appendChild(TD);
}

}

}

function hClick( e ) {
 //  console.log( e.target );
   e.target.style.backgroundColor = clr.value;
// <td style="background-color: red">   


}