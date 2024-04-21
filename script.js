//recipe data and details 
const recipes = [
    { name: "Pasta Carbonara", ingredients: ["spaghetti", "bacon", "eggs", "parmesan", "black pepper"], instructions: "Cook spaghetti. Fry bacon. Mix eggs and parmesan. Combine all.", image: "https://www.cookingclassy.com/wp-content/uploads/2020/10/spaghetti-carbonara-01-768x1152.jpg" },
    { name: "Chicken Curry", ingredients: ["chicken", "curry powder", "coconut milk", "onion", "garlic"], instructions: "Cook chicken. Fry onion and garlic. Add curry powder and coconut milk. Combine all.", image: "https://feastwithsafiya.com/wp-content/uploads/2022/03/chicken-curry-recipe.jpg" },
    { name: "Vegetable Stir-fry", ingredients: ["broccoli", "carrots", "bell pepper", "soy sauce", "ginger"], instructions: "Stir-fry vegetables. Add soy sauce and ginger. Mix well.", image: "https://www.forkinthekitchen.com/wp-content/uploads/2017/11/220113.noodle.stir_.fry-0405.jpg" }
];

// Function to display recipes
function displayRecipes(recipes) {
  const recipesDiv = document.getElementById("recipes");
  recipesDiv.innerHTML = "";
  recipes.forEach(recipe => {
      const recipeDiv = document.createElement("div");
      recipeDiv.classList.add("recipe");
      recipeDiv.innerHTML = `
          <h3>${recipe.name}</h3>
          <img src="${recipe.image}" alt="${recipe.name}">
      `;
      recipeDiv.addEventListener("click", () => displayRecipeDetails(recipe));
      recipesDiv.appendChild(recipeDiv);
  });
}


// Function to display recipe details
function displayRecipeDetails(recipe) {
  const recipeDetailsDiv = document.getElementById("recipe-details");
  recipeDetailsDiv.innerHTML = `
      <h2>${recipe.name}</h2>
      <h3>Ingredients:</h3>
      <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}</ul>
      <h3>Instructions:</h3>
      <p>${recipe.instructions}</p>
  `;
}

// Initial display of recipes
displayRecipes(recipes);


// TO DISPLAY ONLY ONE RECIPE WHEN SEARCH ON MOBILE

document.querySelector('input[type="text"]').addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  const recipes = document.querySelectorAll('.recipe');

  recipes.forEach((recipe) => {
    const recipeText = recipe.textContent.toLowerCase();
    if (recipeText.includes(searchTerm)) {
      recipe.classList.remove('hidden');
    } else {
      recipe.classList.add('hidden');
    }
  });
});
