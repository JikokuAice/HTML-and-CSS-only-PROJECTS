//uses of event delegations.

let tree = document.getElementById('tree');

for(let Li of tree.querySelectorAll('li')){
let span = document.createElement('span');
Li.prepend(span);
span.append(span.nextSibling);

}


tree.addEventListener('click',function(event){

if(event.target.tagName != 'SPAN') return;

let maku = event.target.parentNode.querySelector('ul');

if(!maku) return;
maku.hidden=!maku.hidden;

})


