
const { of, fromEvent } = rxjs;
const { map, filter } = rxjs.operators;
let activated = false;
const Menu = (value) => {
    let nav = document.querySelector("#nav");
    activated = !activated;
    if (activated) {
        nav.classList.add("menu-Activatad");
    } else {
        nav.classList.remove("menu-Activatad");
    }
}
window.addEventListener('scroll', (event) => {
    let header = document.querySelector('#header');
    if (event.path[1].scrollY > 10) {
        header.classList.add("header-scroll");
    } else if (event.path[1].scrollY === 0) {
        header.classList.remove("header-scroll");
    }

});

const result = fromEvent(window, "resize")
    .pipe(map((value) => value.target.window.innerWidth)).subscribe(value => {
        hearWdith(value);
    });
let hearWdith = (value) => {
    if (value > 930) {
        nav.classList.remove("menu-Activatad")
        activated = false;
    }
};


let resetMenu = () => {
    nav.classList.remove("menu-Activatad");
    activated = false;
}



