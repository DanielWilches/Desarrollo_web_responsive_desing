"use strict";

var _rxjs = rxjs,
    of = _rxjs.of,
    fromEvent = _rxjs.fromEvent;
var _rxjs$operators = rxjs.operators,
    map = _rxjs$operators.map,
    filter = _rxjs$operators.filter;
var activated = false;

var Menu = function Menu(value) {
  var nav = document.querySelector("#nav");
  activated = !activated;

  if (activated) {
    nav.classList.add("menu-Activatad");
  } else {
    nav.classList.remove("menu-Activatad");
  }
};

window.addEventListener('scroll', function (event) {
  var header = document.querySelector('#header');

  if (event.path[1].scrollY > 10) {
    header.classList.add("header-scroll");
  } else if (event.path[1].scrollY === 0) {
    header.classList.remove("header-scroll");
  }
});
var result = fromEvent(window, "resize").pipe(map(function (value) {
  return value.target.window.innerWidth;
})).subscribe(function (value) {
  hearWdith(value);
});

var hearWdith = function hearWdith(value) {
  if (value > 930) {
    nav.classList.remove("menu-Activatad");
    activated = false;
  }
};

var resetMenu = function resetMenu() {
  nav.classList.remove("menu-Activatad");
  activated = false;
};