// //var dataReload = document.querySelectorAll("[data-reload]");

const language = {
    eng: {
        switch: "#eng",
        lang_img: "eng.png",
        name: "Olesia Bilyk"
        pronunciation: 
    },
    ukr: {
        switch: "#ukr",
        lang_img: "ukr.png",
        name: "Білик Олеся"
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

let english = true;

function langChange() {
    if (english) {
        lang_img.src = language.ukr.lang_img;
        my_name.textContent = language.ukr.name;
    }
    else {
        lang_img.src = language.eng.lang_img;
        my_name.textContent = language.eng.name;
    }
    english = !english;
    console.log("fgdvjshkj");
}

lang.addEventListener("click", langChange);
