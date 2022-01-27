function searchRecipe(recipe) {
  const apiKey = "b5cf6a2382894ecdbbb832a0a89141ab";
  let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${recipe}&apiKey=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();
  let recipe = document.querySelector("#change-recipe").value;
  searchRecipe(recipe);
}

function handleResponse(response) {
  console.log(response);
  alert("hello");
}

let form = document.querySelector("#search-recipe");
form.addEventListener("submit", handleSubmit);
