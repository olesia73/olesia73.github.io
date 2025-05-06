# Documentation
[This](https://olesia73.github.io) is my [odd] parsonal website that has some basic work-related info and a gallery of my favourite books.
Below is the list of things updated for the final.
## Cursor
Cursor is a custom image fitting the website design. It changes based on the objects at which it points (distinguishing between default, text, and clickables).\
Using cursor parameter makes this so easier and less malfunctioning, but I did not have it in my heart to delete my messy cursor code that took hours to write and was somewhat working.
## Dark Mode
Changing only the background colour of the website, it keeps the current mode in the local storage variable, initially loaded from media query. The mode can be changed manually by clicking Darth Vader icon. The current mode is preserved when switching between pages.
![Dark](doc/dark.png)
![Light](doc/light.png)
## Modal
In the book cover gallery, each cover is a clickable button that changes opacity of a respective modal with brief book description to 1, thus displaying it. 
![Modal](doc/modal.png)
Each modal has closing button which is book cover that says "close" upon hovering throuh JavaScript mouse events (the cursor being on it is not visible on screenshot):
![Modal](doc/modal2.png)
I tried to work with arrays more for my final because otherwise my code would be much longer and unreadable. It was interesting to work with elements with technically unique IDs by treating them as strings containing numbers that can be iterated over.
```js
for (let j = 1; j <= 19; j++) {
    modal.push(document.getElementById('m'+String(j)));
    open.push(document.getElementById('b'+String(j)));
    modal[j].querySelector('.close > img').src = 'books/book_' + j + '.jpeg';
    open[j].addEventListener('click', (event) => {
        modal[j].classList.add('show');
        modal[j].style.top = `${event.clientY}px`;
        modal[j].style.left = `${event.clientX / 2}px`;
        typeWriter(j);
    })
}
```
## Typewriting Effect
Upon displaying text the modal is loaded with typewriting effect, and what I am proud of is that it does so independently for different modals. It uses JS TImeout.