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
}

function recipeSearch(search) {
  let recipeNumber = "Recipe :";
  let recipeNumbers = ["one", "two", "three", "four", "five", "six"];

  return recipeNumbers[recipeNumber];
}

function displayRecipes(response) {
  let recipeElement = document.querySelector("#recipe");
  let recipeHTML = `<div class="row">`;
  let recipe = response.data.results;
  recipe.forEach(function (recipeSearch, index) {
    if (index < 6) {
      recipeHTML =
        recipeHTML +
        `<div class="col-4">
          <h4 class="recipe-list">${formatRecipe(recipeSearch.title)}</h4>
          <p id="recipe-one" class="recipe-list"></p>
          <img
            src="https://spoonacular.com/cdn/recipeImages/${
              response.data.results[0].id
            }-312x231.jpg"
            alt="Recipe"
            id="main-dish"
          />
        </div>`;
    }
  });

  recipeHTML = recipeHTML + `</div>`;
  recipeHTMl.innerHTML = recipeHTML;
}

let form = document.querySelector("#search-recipe");
form.addEventListener("submit", handleSubmit);
