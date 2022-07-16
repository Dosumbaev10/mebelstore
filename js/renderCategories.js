const renderCategoriesList = () => {
    const categoriesDetails = document.querySelector(".categories__details");

const categoriesList = [
  "Кухни",
  "Спальни",
  "Гостинные",
  "Прихожие",
  "Офисная мебель",
  "Детская",
  "Акция",
  ""      
];

const categoriesImg = [
    "./img/categories/kitchen.svg",
    "./img/categories/bedroom.svg",
    "./img/categories/livingroom.svg",
    "./img/categories/closet.svg",
    "./img/categories/office.svg",
    "./img/categories/childrensroom.svg",
    "",
    "./img/categories/etc.svg"


]

for (let i = 0; i < categoriesList.length; i++) {
    categoriesDetails.innerHTML += `
    <li class="categories__items">
    <img class="categories__icon" src="${categoriesImg[i]}" alt="" />
    ${categoriesList[i]}</li>`;
}

const categories = categoriesDetails.querySelectorAll("li");
categories.forEach((item) => {
  item.addEventListener("click", () => {
    categories.forEach((item) => {
      item.className = "";
    });
    item.classList.toggle("active");
  });
});
}

export default renderCategoriesList;