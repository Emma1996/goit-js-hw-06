var liBlocks = document.querySelectorAll(".item");

console.log(`Number of categories: ${liBlocks.length}`);

liBlocks.forEach((li) => {
  console.log(`Category: ${li.querySelector("h2").textContent}`);
  console.log(
    `Elements: ${li.querySelector("ul").querySelectorAll("li").length}`
  );
});
