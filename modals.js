
// const open = document.getElementById('open');
let modal = [];
let open = [];
let desc = [];
modal.push(document.querySelector('modal'));
open.push(document.querySelector('book'));
desc.push(0);
for (let j = 1; j <= 2; j++) {
    modal.push(document.getElementById('m'+String(j)));
    open.push(document.getElementById('b'+String(j)));
    desc.push(0);
    open[j].addEventListener('click', (event) => {
        modal[j].classList.add('show');
        modal[j].style.top = `${event.clientY}px`;
        modal[j].style.left = `${event.clientX / 2}px`;
        typeWriter(j);
    })
}
const close = document.querySelector('.close');

close.addEventListener('click', () => {
    modal[1].classList.remove('show');
    modal[1].querySelector(".description").innerHTML = '';
    desc[1] = 0;
})

var txt = ["buffer", 
'\"The Gentle Grafter\" by O. Henry is a collection of humorous short stories written in the early 20th century. The book revolves around the misadventures and schemes of Jeff Peters and Andy Tucker, as they engage in a variety of con games and dubious enterprises.',
    'Logen Ninefingers, infamous barbarian, has finally run out of luck. Caught in one feud too many, he’s on the verge of becoming a dead barbarian – leaving nothing behind him but bad songs, dead friends, and a lot of happy enemies.']

var speed = 20; /* in milliseconds */
function typeWriter(index) {
    if (desc[index] < txt[index].length) {
        modal[index].querySelector(".description").innerHTML += txt[index].charAt(desc[index]);
        ++desc[index];
        timeout = setTimeout(function() {typeWriter(index)}, speed);
    }
}