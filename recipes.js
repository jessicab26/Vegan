function searchRecipe(recipe) {
  const apiKey = "b5cf6a2382894ecdbbb832a0a89141ab";
  let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${recipe}&apiKey=${apiKey}&diet=Vegan`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();
  let recipe = document.querySelector("#change-recipe").value;
  searchRecipe(recipe);
}

function handleResponse(response) {
  console.log(response);
  document.querySelector("#recipe-one").innerHTML =
    response.data.results[0].title;

  document.querySelector("#recipe-two").innerHTML =
    response.data.results[1].title;
  document.querySelector("#recipe-three").innerHTML =
    response.data.results[2].title;
  let main = document.querySelector("#main-dish");
  let second = document.querySelector("#second-dish");
  let third = document.querySelector("#third-dish");
  main.setAttribute(
    "src",
    `https://spoonacular.com/recipeImages/${response.data.results[0].id}-312x231.jpg`
  );
  main.setAttribute("alt", response.data.results[0].title);
  main.setAttribute("title", response.data.results[0].title);
  second.setAttribute(
    "src",
    `https://spoonacular.com/recipeImages/${response.data.results[1].id}-312x231.jpg`
  );
  second.setAttribute("alt", response.data.results[1].title);
  second.setAttribute("title", response.data.results[1].title);
  third.setAttribute(
    "src",
    `https://spoonacular.com/recipeImages/${response.data.results[2].id}-312x231.jpg`
  );
  third.setAttribute("alt", response.data.results[2].title);
  third.setAttribute("title", response.data.results[2].title);
}

let form = document.querySelector("#search-recipe");
form.addEventListener("submit", handleSubmit);
