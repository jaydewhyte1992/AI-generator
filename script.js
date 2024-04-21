function generateTips(event) {
  event.preventDefault();

  new Typewriter("#tips", {
    strings: "Travel tips here..",
    autoStart: true,
    cursor: "✈️",
  });
}
let travelFormElement = document.querySelector("#travel-tips-form");
travelFormElement.addEventListener("submit", generateTips);
