// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  likerApp();
});

function likerApp() {
  const likeButton = document.querySelectorAll("span.like-glyph");

  likeButton.forEach(heartClick);

  function heartClick(buttonTap) {
    buttonTap.addEventListener("click", (e) => {
      mimicServerCall()
        .then((response) => {
          if (e.target.innerText === EMPTY_HEART) {
            e.target.innerText = FULL_HEART;
            e.target.classList.add("activated-heart");
          } else if (e.target.innerText === FULL_HEART) {
            e.target.innerText = EMPTY_HEART;
            e.target.classList.remove("activated-heart");
          }
        })

        .catch(function () {
          const errorMess = document.getElementById("modal");
          console.log(errorMess);
          errorMess.className("");
        });
    });
  }
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
