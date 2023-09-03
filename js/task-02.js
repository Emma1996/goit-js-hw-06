const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("ul");

const ingredientsLi = ingredients.map((ingredient) => {
  const ingredientLi = document.createElement("li");
  ingredientLi.textContent = ingredient;
  ingredientLi.className = "item";
  return ingredientLi;
});

ul.append(...ingredientsLi);
