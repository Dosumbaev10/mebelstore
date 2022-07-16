
const getData = async (url = "http://localhost:3000/products") => {
    const heroBestseller = document.querySelector(".hero__bestseller");
  
    const result = await fetch(url);
    const data = await result.json();
  
    for (let i = 0; i < data.length; i++) {
        heroBestseller.innerHTML += `
        <div class="card">
        <div class="card__detailes">
            <div class="card__like">
                <img calss="card__like--icon" src="./img/header/like.svg" alt="">
            </div>
            <div class="card__images">
                <img class="card__img" src="${data[i].img}" alt="">
            </div>
            <div class="card__descriptions">
                <div class="card__name">${data[i].name}</div>
                <h2 class="card__types">${data[i].type}</h2>
                <h3 class="card__podtypes"></h3>
                <div class="card__price">${data[i].price}</div>
                <div class="card__titles">
                <h2 class="card__sizes">Размеры</h2>
                <ul class="card__parametres">
                    <li class="width">ШИРИНА<p>${data[i].size[0]} см</p></li>
                    <li class="">ГЛУБИНА<p>${data[i].size[1]} см</p></li>
                    <li class="height">ВЫСОТА<p>${data[i].size[2]} см</p></li>
                </ul>
                <button class="card__btn">Добавить</button>
                </div>
            </div>
        </div>
    </div>
        `
    }  
  };
  
 export default getData;
  
