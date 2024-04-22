function displayTips(response) {
  new Typewriter("#tips", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "✈️",
    delay: 1,
  });
}

function generateTips(event) {
  event.preventDefault();
  let userRequest = document.querySelector("#user-input").value;
  let apiKey = "dec30ab936f6fe43ot4b0dead25ade10";
  let prompt = `Generate travel tips about ${userRequest}`;
  let context =
    "User instructions: As a witty travel expert, craft a list of 5 humorous travel tips in basic HTML format. Begin with the heading Top Five Travel Tips for and maintain a light-hearted tone. Avoid numbering, use bullets, and ensure each tip is concise and witty.";
  let apiURL = `https://api.shecodes.ai/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayTips);
}

let travelFormElement = document.querySelector("#travel-tips-form");
travelFormElement.addEventListener("submit", generateTips);
