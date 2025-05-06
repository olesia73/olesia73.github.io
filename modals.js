// Script for the modals on library page
let modal = [];
let open = [];
let desc = []; // array for character count for modal typewriter
let close = [];
modal.push(document.querySelector('modal'));
open.push(document.querySelector('book'));
desc.push(0);
close.push(document.querySelector('.close'));
// Generates arrays of buttons and loads correct images for modals
for (let j = 1; j <= 19; j++) {
    modal.push(document.getElementById('m'+String(j)));
    open.push(document.getElementById('b'+String(j)));
    desc.push(0);
    close.push(modal[j].querySelector('.close'));
    modal[j].querySelector('.close > img').src = 'books/book_' + j + '.jpeg';
    open[j].addEventListener('click', (event) => {
        modal[j].classList.add('show');
        modal[j].style.top = `${event.clientY}px`;
        modal[j].style.left = `${event.clientX / 2}px`;
        typeWriter(j);
    })
    close[j].addEventListener('click', () => {
        modal[j].classList.remove('show');
        modal[j].querySelector(".description").innerHTML = '';
        desc[j] = 0;
    })
    close[j].addEventListener("mouseenter", () => { 
        close[j].querySelector('img').style.opacity = 0.3;
        close[j].innerHTML += `<div class="centered">Close me</div>`;
    })
    close[j].addEventListener("mouseout", () => { 
        close[j].querySelector('img').style.opacity = 1;
        close[j].innerHTML = `<img>`;
        close[j].querySelector('img').src = 'books/book_' + j + '.jpeg';
        console.log(close[j].innerHTML);
    })
}

function typeWriter(index) {
    if (desc[index] < txt[index].length) {
        modal[index].querySelector(".description").innerHTML += txt[index].charAt(desc[index]);
        ++desc[index];
        setTimeout(function() {typeWriter(index)}, 20);
    }
}

var txt = ["buffer", 
    '\"The Gentle Grafter\" by O. Henry is a collection of humorous short stories written in the early 20th century. The book revolves around the misadventures and schemes of Jeff Peters and Andy Tucker, as they engage in a variety of con games and dubious enterprises.',
        'Logen Ninefingers, infamous barbarian, has finally run out of luck. Caught in one feud too many, he’s on the verge of becoming a dead barbarian – leaving nothing behind him but bad songs, dead friends, and a lot of happy enemies.',
    'Imprisoned in Ankh-Morpork, con artist Moist von Lipwig is offered a choice: to be executed or to accept a job as the city\'s Postmaster General. It\'s a tough decision, but he\'s already survived one hanging and isn\'t in the mood to try it again.',
        'This delightful, swashbuckling adventure follows the story of young D\'Artagnan as he pursues his dream of becoming a musketeer. He arrives in Paris and finds himself befriended by Athos, Porthos, and Aramis, three experienced musketeers, and they become caught up in political intrigue and court dramas.',
    'Остап Вишня був затятим мисливцем та рибалкою, часто виїжджав у мальовничі місцевості з друзями на полювання. Усі ті спостереження, усе почуте він записував та використовував згодом при написанні «Мисливських усмішок».',
        'Alice asked the Cheshire Cat, who was sitting in a tree, “What road do I take?”\nThe cat asked, “Where do you want to go?”\n“I don’t know,” Alice answered.\n“Then,” said the cat, “it really doesn’t matter, does it?',
    'Sent to jail for stealing a loaf of bread in 19th-century France, prisoner Jean Valjean earns his release after 19 years of imprisonment only to find a world unwilling to give him a second chance.',
        'The story follows a Victorian scientist, who, at a gathering of friends, claims that he has invented a device that enables him to travel through time and has visited the future, arriving in the year 802,701 in what had once been London.',
    'The story is set in an alternate universe, where Petunia Evans married an Oxford professor of biochemistry, Michael Verres, instead of Vernon Dursley. Harry was introduced to science and rationality at an early age, and was allowed and encouraged to read on a wide range of topics including both fictional and non-fictional.',
        'Здобувши юридичну освіту, Євген Рафалович приїздить до провінційного галицького містечка з метою стати народним захисником, обстоювати соціальні та національні права галицьких селян. Рафалович кидається у вир життя.',
    'The artist is the creator of beautiful things. To reveal art and conceal the artist is art\'s aim. The critic is he who can translate into another manner or a new material his impression of beautiful things. The highest as the lowest form of criticism is a mode of autobiography. Those who find ugly meanings in beautiful things are corrupt without being charming. This is a fault. Those who find beautiful meanings in beautiful things are the cultivated. For these there is hope. They are the elect to whom beautiful things mean only beauty. There is no such thing as a moral or an immoral book. Books are well written, or badly written. That is all.',
        'The Terror tells the story of the John Franklin Arctic expedition, which took place in the mid–1840s with the objective of finding the Northwest Passage. Both ships, the HMS Erebus and HMS Terror, were lost with all hands (a total of 129 casualties).',
    'Crispin, a brilliant mosaicist, still grieving for the family he lost to the plague, who lives only for his arcane craft and cares little for ambition, less for money, and for intrigue not at all, must answer an imperial summons to Sarantium, to work on the greatest art work ever imagined.',
        'French King Philip the Fair rules with an iron fist, but is surrounded by scandal and intrigue.',
    'Cер Макс знайомить читача з собою та історією свого містичного «переїзду» з нашого звичного світу в магічний світ Ехо, названий так на честь найбільшого міста наймогутнішого королівства. Спільно з сером Джуффіном Галлі, начальником таємного розшуку Ехо, який допомагав в його «переїзді», сер Макс розслідує серію дивних вбивств у будинку сусіда сера Джуффіна, жертвою яких мало не став його майбутній колега, сер Меліфаро.',
        'A man with no illusions about chance, he is powerfully drawn to a woman who can look death in the eye and laugh. Together, he and Lillian make an unusual pair, living only for the moment, without regard for the future. It\'s a perfect arrangement—until one of them begins to fall in love.',
    'Set in early 19th-century Paris, it tells the story of a young man who finds a magic piece of shagreen (untanned skin from a wild ass) that fulfills his every desire. For each wish granted, however, the skin shrinks and consumes a portion of his physical energy.',
        'Peter Pan, a boy who never grows up, takes the children Wendy, John, and Michael to magical Neverland, where Wendy mothers the Lost Boys. The children go on adventures with fairies, mermaids, and pirates, with Wendy becoming such a good mother that the pirate Smee asks her to be his, too.',
    'The Sea Wolf is Jack London\'s powerful and gripping saga of Humphrey Van Weyden, captured by a seal-hunting ship and now an unwilling sailor under its dreaded captain, Wolf Larsen.']