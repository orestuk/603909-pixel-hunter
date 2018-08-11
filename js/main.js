'use strict';

const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;

const mainEl = document.querySelector(`#main`);
const bodyEl = document.querySelector(`body`);

const selectScreen = (element) => {
  mainEl.innerHTML = ``;
  mainEl.appendChild(element.cloneNode(true));
};

const screens = [`#intro`, `#greeting`, `#rules`, `#game-1`, `#game-2`, `#game-3`, `#stats`]
  .map((it) => document.querySelector(it).content);

let current = 0;
const select = (index) => {
  index = index < 0 ? 0 : index;
  index = index >= screens.length ? screens.length - 1 : index;
  current = index;
  selectScreen(screens[current]);
};

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case RIGHT_ARROW:
      select(current + 1);
      break;
    case LEFT_ARROW:
      select(current - 1);
      break;
}
});

const createArrows = () => {
  const arrowsTemplate = `
     <style>
    .arrows__wrap {
      position: absolute;
      top: 95px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
    </style>
    <button class="arrows__btn"><-</button>
    <button class="arrows__btn">-></button>`;
  const divEl = document.createElement(`div`);
  divEl.classList.add(`arrows__wrap`);
  divEl.innerHTML = arrowsTemplate;
  const arrowsEl = divEl.querySelectorAll(`.arrows__btn`);
  arrowsEl[0].addEventListener(`click`, () => select(current - 1));
  arrowsEl[1].addEventListener(`click`, () => select(current + 1));
  return divEl;
};

bodyEl.appendChild(createArrows());
select(0);
