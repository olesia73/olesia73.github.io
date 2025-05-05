// //var dataReload = document.querySelectorAll("[data-reload]");

const language = {
    eng: {
        switch: "#eng",
        lang_img: "eng.png",
        name: "Olesia Bilyk",
        pronunciation: "[oh-LEH-sia BEE-luhk]",
        home: "Home",
        library: "Library",
        more: "More",
        media: "Find me on social media:",
        recording: "Here's a recording of my talk on Convolutional Networks while at KAIST Complexity and Real Computation Lab:",
        cv: `Here is my <a href="https://docs.google.com/document/d/1us3tLhJUzym-pqyBpDGPMcDkeKo50hufakeKGf2kB7k/edit?usp=sharing">CV</a><br>(last updated Dec 2024)`,
        favs: "And here are my favourite books:"
    },
    ukr: {
        switch: "#ukr",
        lang_img: "ukr.png",
        name: "Білик Олеся",
        pronunciation: "",
        home: "Домашня сторінка",
        library: "Бібліотека",
        more: "Більше",
        media: "Я тут в соцмережах:",
        recording: "Це запис мого виступу на тему конволюційних мереж під час самостійного навчання у лабораторії в KAIST (англійською):",
        cv: `Це моє <a href="https://docs.google.com/document/d/1us3tLhJUzym-pqyBpDGPMcDkeKo50hufakeKGf2kB7k/edit?usp=sharing">резюме</a><br>(Востаннє оновлене в грудні 2024)`,
        favs: "А це мої улюблені книжки:"
    }
};

// if (window.location.hash && window.location.hash === "#ukr") {
//     lang.href = language.ukr.switch;
//     lang_img.src = language.ukr.lang_img;
//     myName.textContent = language.ukr.name;
// }
// else {
//     lang.href = language.eng.switch;
//     lang_img.src = language.eng.lang_img;
//     myName.textContent = language.eng.name;
// }
// // link.forEach(el=>{
// //     el.addEventListener("click", ()=>{
// //          langs.querySelector(".active").classList.remove("active");
// //          el.classList.add("active");
// //     })
// // })

// for (i = 0; i <= dataReload.length; ++i) {
//     dataReload[i].onclick = function() {
//         setTimeout(function () {
//             location.reload = true;
//           }, 200);
        
//     }

// }


var path = window.location.pathname;
var page = path.split("/").pop();

//let english = true;

let english = localStorage.getItem('english');
if (null === english) {
    localStorage.setItem("english", "eng");
}
else if (english === "ukr") {
    english = "eng";
    langChange();
}

function langChange() {
    if (english === "eng") {
        switch (page) {
            case "index.html":
                lang_img.src = language.ukr.lang_img;
                my_name.textContent = language.ukr.name;
                pronunciation.textContent = language.ukr.pronunciation;
                home.textContent = language.ukr.home;
                library.textContent = language.ukr.library;
                more.textContent = language.ukr.more;
                media.textContent = language.ukr.media;
                cv.innerHTML = language.ukr.cv;
                break;
            case "library.html":
                lang_img.src = language.ukr.lang_img;
                home.textContent = language.ukr.home;
                library.textContent = language.ukr.library;
                more.textContent = language.ukr.more;
                break;
            case "more.html":
                lang_img.src = language.ukr.lang_img;
                home.textContent = language.ukr.home;
                library.textContent = language.ukr.library;
                more.textContent = language.ukr.more;
                recording.textContent = language.ukr.recording;
                break;
        }
        localStorage.setItem("english", "ukr");
    }
    else {
        switch (page) {
            case "index.html":
                lang_img.src = language.eng.lang_img;
                my_name.textContent = language.eng.name;
                pronunciation.textContent = language.eng.pronunciation;
                home.textContent = language.eng.home;
                library.textContent = language.eng.library;
                more.textContent = language.eng.more;
                media.textContent = language.eng.media;
                cv.innerHTML = language.eng.cv;
                break;
            case "library.html":
                lang_img.src = language.eng.lang_img;
                home.textContent = language.eng.home;
                library.textContent = language.eng.library;
                more.textContent = language.eng.more;
                break;
            case "more.html":
                lang_img.src = language.eng.lang_img;
                home.textContent = language.eng.home;
                library.textContent = language.eng.library;
                more.textContent = language.eng.more;
                recording.textContent = language.eng.recording;
                break;
        }
        localStorage.setItem("english", "eng");
    }
    english = localStorage.getItem('english');
}



lang.addEventListener("click", langChange);

//
// Cursor
// I ended up finding a much simpler solution when dong minor fixes 
// but was too sorry to delete it
//
// const cursor = document.querySelector(".cursor");
// document.addEventListener('mouseenter', () => {
//     cursor.style.display = 'block';
// });
// document.addEventListener('mouseleave', () => {
//     cursor.style.display = 'none';
// });
// document.addEventListener('mousemove', (event) => {
//     cursor.style.display = 'block';
//     cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
// });
// document.addEventListener('click', () => {
//     cursor.classList.add('active');
//     //cursor.style.background-image = url('click.png');
//     setTimeout(() => {
//         cursor.classList.remove('active')
//     }, 500);
// });
//
//


//
// Modal
if (page == "library.html") {
    const open = document.getElementById('open');
    const modal = document.getElementById('modal');
    const close = document.getElementById('close');

    open.addEventListener('click', (event) => {
        modal.classList.add('show');
        modal.style.top = `${event.clientY}px`;
        modal.style.left = `${event.clientX / 2}px`;
        // modal.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        
    })
    close.addEventListener('click', () => {
        modal.classList.remove('show');
    })
}
//
//


// Dark Mode
const btn = document.getElementById('btn-toggle');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

btn.addEventListener("click", () => {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
  } else {
    document.body.classList.toggle("dark-theme");
  }
});