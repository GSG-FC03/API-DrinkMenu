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