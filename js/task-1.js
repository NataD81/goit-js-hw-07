const categoriesList = document.querySelector(".categories");
const categoriesElements = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesElements.length}`);

categoriesElements.forEach(category => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElementsCount = category.querySelectorAll("ul li").length;
  console.log(`Category: ${categoryName}, Elements: ${categoryElementsCount}`);
});