import { disableScroll, enableScroll } from "./utils.js";

const backdrop = document.querySelector(".backdrop");
const modalBtnOpenList = document.querySelectorAll(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");

const toggleModal = () => {
  backdrop.classList.toggle("js-hidden");
  if (backdrop.classList.contains("js-hidden")) {
    enableScroll();
  } else {
    disableScroll();
  }
};

modalBtnOpenList.forEach((btn) => {
  btn.addEventListener("click", toggleModal);
});

modalBtnClose.addEventListener("click", toggleModal);
