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
    "User instructions: You are a witty travel expert who loves to provide unique travel tips. Your mission is to generate a list of 5 top travel tips that are both important and humorous. Please provide tips in basic HTML. Make sure to follow the user instructions. Before listing the tips, the heading should be, 'Top five travel tips for'. Please keep answers short and witty, make sure each point is on a new line and keep the mood light and fun!";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayTips);
}

let travelFormElement = document.querySelector("#travel-tips-form");
travelFormElement.addEventListener("submit", generateTips);
