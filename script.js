const ratingEls = document.querySelectorAll(".rating");

const btnEl = document.getElementById("btn");

const containerEl = document.getElementById("container");

let selectedRating = "";

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click",(event) => {
    removeActive();
    selectedRating = event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if(selectedRating !== ""){
    let feedbackMessage = "";
    switch(selectedRating) {
      case "Unhappy":
        feedbackMessage = "We're sorry to hear that you weren't satisfied with our service. Please let us know how we can improve.";
        break;
      case "Neutral":
        feedbackMessage = "Thanks for your feedback! We're always looking for ways to improve our service, so please let us know if you have any suggestions.";
        break;
      case "Happy":
        feedbackMessage = "Thanks for letting us know that you had a positive experience! We're glad that we could help.";
        break;
        default:
        feedbackMessage = "";
        break;
    }
    containerEl.innerHTML = `
      <strong>Thank You!</strong>
      <br>
      <br>
      <strong>Feedback: ${selectedRating}</strong>
      <p> ${feedbackMessage} </p>
    `;
  }
});

function removeActive(){
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}
