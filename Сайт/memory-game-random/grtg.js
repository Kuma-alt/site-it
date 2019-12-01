

var items = document.querySelectorAll('ul.deck li');

for (let i=0; i<items.length; i++) {
	items [i].addEventListener('click', handClick);
  items [i].style.order = i+1;
}
//items[0].style.order = 2;
//items[1].style.order = 1;
for ( let i=items.length-1; i>1; i--){
  let j = Math.floor( Math.random() * i );
 //console.log( i, j );
 let t = items[i].style.order;
 items[i].style.order = items[j].style.order;
 items[j].style.order = t;
}
var clickCnt = 0;

function handClick( e )  {
    //console.log( e );
    if (e.target.className == '' && clickCnt < 2) {
    	e.target.className = 'show';
    	clickCnt++;
    }
    if (clickCnt== 2) {
    setTimeout(checkCard, 2000 );
    clickCnt = 3;
    }
}

function checkCard() {
   clickCnt = 0;
   let cards = document.querySelectorAll('ul.deck li.show i');
   //cards[0].className = '';
   //cards[1].className = '';
    if (cards[0].className == cards[1].className) {
    	cards[0].parentNode.className = 'match';
    	cards[1].parentNode.className = 'match';
    } else {
cards[0].parentNode.className = '';
cards[1].parentNode.className = '';

    }
}