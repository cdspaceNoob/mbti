const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

function begin() {
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animaion = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animaion = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";
    }, 450);
  }, 450);
}
