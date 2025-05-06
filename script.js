const language = {
    eng: {
        switch: "ukr",
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
        switch: "eng",
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


var path = window.location.pathname;
var page = path.split("/").pop();

let english = localStorage.getItem('english');
if (null === english) {
    localStorage.setItem("english", "eng");
}
else if (english === "ukr") {
    english = "eng";
    langChange();
}

function langChange() {
    let lang = language[english].switch;
    localStorage.setItem("english", lang);
    switch (page) {
        case "library.html":
            lang_img.src = language[lang].lang_img;
            home.textContent = language[lang].home;
            library.textContent = language[lang].library;
            more.textContent = language[lang].more;
            break;
        case "more.html":
            lang_img.src = language[lang].lang_img;
            home.textContent = language[lang].home;
            library.textContent = language[lang].library;
            more.textContent = language[lang].more;
            recording.textContent = language[lang].recording;
            break;
        // case "index.html":
        default:
            lang_img.src = language[lang].lang_img;
            my_name.textContent = language[lang].name;
            pronunciation.textContent = language[lang].pronunciation;
            home.textContent = language[lang].home;
            library.textContent = language[lang].library;
            more.textContent = language[lang].more;
            media.textContent = language[lang].media;
            cv.innerHTML = language[lang].cv;
            break;
    }
    english = localStorage.getItem('english');
}

lang.addEventListener("click", langChange);

// Dark Mode
// Works similarly to language in terms of using local storage to keep the value when switching between pages, but loads the initial value from media query
// Also, I haven't used js variable for localStorage variable here
const btn = document.getElementById('toggle');
if (null === localStorage.getItem('dark_mode')) {
    localStorage.setItem("dark_mode", window.matchMedia("(prefers-color-scheme: dark)").matches);
}
else if (localStorage.getItem('dark_mode') === 'true') {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
}
btn.addEventListener("click", () => {
  if (localStorage.getItem('dark_mode') === 'true') {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
    localStorage.setItem("dark_mode", false);
  } else {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    localStorage.setItem("dark_mode", true);
  }
});

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