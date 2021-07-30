document.addEventListener("load", getDatta);
const api = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
async function getDatta() {
  try {
    const response = await fetch(api);
    const data = await response.json();
    createList(data);
  } catch (error) {
    console.log("error", error.message);
  }
}
getDatta();
const container = document.getElementById("container");

function createList(data) {
  let arrayOfDrinks = data.drinks;

  for (let i = 0; i < 25; i++) {
    const divs = document.createElement("div");
    divs.setAttribute("class", "drink");
    container.appendChild(divs);
    const figureCaption = document.createElement("figure");
    figureCaption.setAttribute("class", "fig");
    divs.appendChild(figureCaption);
    const imge = document.createElement("img");
    imge.setAttribute("class", "imgs");
    figureCaption.appendChild(imge);
    imge.setAttribute("src", `${arrayOfDrinks[i].strDrinkThumb}`);

    const caption1 = document.createElement("figcaption");
    caption1.setAttribute("class", "caption");
    figureCaption.appendChild(caption1);

    caption1.innerText = arrayOfDrinks[i].strDrink;

    const caption2 = document.createElement("figcaption");
    caption2.setAttribute("class", "caption  captions");
    figureCaption.appendChild(caption2);
    let price = arrayOfDrinks[i].idDrink;
    let slice = price.slice(0, 2);
    caption2.innerText = ` ${slice} $`;
  }
}