const cocktails = [
  {
    name: "Margarita",
    glass: "Cocktail Glass",
    ingredients: ["Tequila", "Lime Juice", "Triple Sec", "Salt"],
    tags: ["sour", "fresh", "citrusy"],
    baseSpirit: "Tequila",
    garnish: "Lime Wheel",
    strength: "medium",
    flavorProfile: ["citrus", "zesty", "vibrant"]
  },
  {
    name: "Old Fashioned",
    glass: "Rocks Glass",
    ingredients: ["Bourbon", "Sugar", "Angostura Bitters", "Orange Peel"],
    tags: ["boozy", "classic", "spirit-forward"],
    baseSpirit: "Bourbon",
    garnish: "Orange Peel",
    strength: "strong",
    flavorProfile: ["caramel", "bitter", "aromatic"]
  },
  {
    name: "Negroni",
    glass: "Rocks Glass",
    ingredients: ["Gin", "Campari", "Sweet Vermouth"],
    tags: ["bitter", "boozy", "herbal"],
    baseSpirit: "Gin",
    garnish: "Orange Peel",
    strength: "strong",
    flavorProfile: ["bitter", "botanical", "rich"]
  },
  {
    name: "Martini",
    glass: "Martini Glass",
    ingredients: ["Gin", "Dry Vermouth", "Olive"],
    tags: ["boozy", "classic", "elegant"],
    baseSpirit: "Gin",
    garnish: "Olive",
    strength: "strong",
    flavorProfile: ["dry", "botanical", "clean"]
  },
  {
    name: "Mojito",
    glass: "Highball",
    ingredients: ["White Rum", "Mint", "Lime Juice", "Sugar", "Soda Water"],
    tags: ["fresh", "herbal", "light"],
    baseSpirit: "White Rum",
    garnish: "Mint Sprig",
    strength: "light",
    flavorProfile: ["minty", "citrus", "crisp"]
  },
  {
    name: "Whiskey Sour",
    glass: "Coupe",
    ingredients: ["Whiskey", "Lemon Juice", "Sugar", "Egg White"],
    tags: ["sour", "frothy", "classic"],
    baseSpirit: "Whiskey",
    garnish: "Angostura Drops",
    strength: "medium",
    flavorProfile: ["citrus", "smooth", "balanced"]
  },
  {
    name: "Daiquiri",
    glass: "Coupe",
    ingredients: ["White Rum", "Lime Juice", "Sugar"],
    tags: ["sour", "fresh", "simple"],
    baseSpirit: "White Rum",
    garnish: "None",
    strength: "medium",
    flavorProfile: ["citrus", "clean", "bright"]
  },
  {
    name: "Mai Tai",
    glass: "Rocks Glass",
    ingredients: ["Dark Rum", "White Rum", "Orange Curaçao", "Lime Juice", "Orgeat"],
    tags: ["tropical", "complex", "fruity"],
    baseSpirit: "Dark Rum",
    garnish: "Mint Sprig & Lime Shell",
    strength: "strong",
    flavorProfile: ["nutty", "tropical", "citrus"]
  },
  {
    name: "Manhattan",
    glass: "Coupe",
    ingredients: ["Rye Whiskey", "Sweet Vermouth", "Angostura Bitters"],
    tags: ["boozy", "spicy", "classic"],
    baseSpirit: "Rye Whiskey",
    garnish: "Cherry",
    strength: "strong",
    flavorProfile: ["spiced", "rich", "aromatic"]
  },
  {
    name: "Cosmopolitan",
    glass: "Coupe",
    ingredients: ["Vodka", "Triple Sec", "Lime Juice", "Cranberry Juice"],
    tags: ["fruity", "tart", "modern"],
    baseSpirit: "Vodka",
    garnish: "Orange Twist",
    strength: "medium",
    flavorProfile: ["cranberry", "citrus", "bright"]
  },
  {
    name: "Pina Colada",
    glass: "Hurricane Glass",
    ingredients: ["White Rum", "Pineapple Juice", "Coconut Cream"],
    tags: ["creamy", "tropical", "sweet"],
    baseSpirit: "White Rum",
    garnish: "Pineapple Slice & Cherry",
    strength: "light",
    flavorProfile: ["pineapple", "coconut", "sweet"]
  },
  {
    name: "Sidecar",
    glass: "Coupe",
    ingredients: ["Cognac", "Triple Sec", "Lemon Juice"],
    tags: ["sour", "classic"],
    baseSpirit: "Cognac",
    garnish: "Orange Twist",
    strength: "medium",
    flavorProfile: ["citrus", "spiced", "bright"]
  },
  {
    name: "Bloody Mary",
    glass: "Highball",
    ingredients: ["Vodka", "Tomato Juice", "Lemon Juice", "Spices", "Celery Salt"],
    tags: ["savory", "brunch", "spicy"],
    baseSpirit: "Vodka",
    garnish: "Celery Stalk",
    strength: "medium",
    flavorProfile: ["tomato", "spiced", "umami"]
  },
  {
    name: "Tom Collins",
    glass: "Highball",
    ingredients: ["Gin", "Lemon Juice", "Sugar", "Soda Water"],
    tags: ["fresh", "citrusy", "light"],
    baseSpirit: "Gin",
    garnish: "Lemon Wheel",
    strength: "light",
    flavorProfile: ["lemon", "clean", "effervescent"]
  },
  {
    name: "Aperol Spritz",
    glass: "Wine Glass",
    ingredients: ["Prosecco", "Aperol", "Soda Water"],
    tags: ["bitter", "light", "summer"],
    baseSpirit: "Aperol",
    garnish: "Orange Slice",
    strength: "light",
    flavorProfile: ["bitter-orange", "bubbly", "sweet"]
  },
  {
    name: "French 75",
    glass: "Champagne Flute",
    ingredients: ["Gin", "Lemon Juice", "Sugar", "Champagne"],
    tags: ["sparkling", "fresh", "elegant"],
    baseSpirit: "Gin",
    garnish: "Lemon Twist",
    strength: "medium",
    flavorProfile: ["citrus", "bubbly", "botanical"]
  },
  {
    name: "Sazerac",
    glass: "Rocks Glass",
    ingredients: ["Rye Whiskey", "Absinthe", "Sugar", "Peychaud’s Bitters"],
    tags: ["boozy", "aromatic", "historic"],
    baseSpirit: "Rye Whiskey",
    garnish: "Lemon Peel",
    strength: "strong",
    flavorProfile: ["anise", "spiced", "rich"]
  },
  {
    name: "Pisco Sour",
    glass: "Coupe",
    ingredients: ["Pisco", "Lime Juice", "Sugar", "Egg White", "Bitters"],
    tags: ["sour", "frothy", "smooth"],
    baseSpirit: "Pisco",
    garnish: "Bitters Drops",
    strength: "medium",
    flavorProfile: ["citrus", "grape", "silky"]
  },
  {
    name: "Gin & Tonic",
    glass: "Highball",
    ingredients: ["Gin", "Tonic Water", "Lime"],
    tags: ["light", "fresh", "classic"],
    baseSpirit: "Gin",
    garnish: "Lime Wedge",
    strength: "light",
    flavorProfile: ["botanical", "bitter", "clean"]
  },
  {
    name: "Caipirinha",
    glass: "Rocks Glass",
    ingredients: ["Cachaça", "Lime", "Sugar"],
    tags: ["fresh", "citrusy"],
    baseSpirit: "Cachaça",
    garnish: "Lime Wheel",
    strength: "medium",
    flavorProfile: ["lime", "raw-sugar", "bright"]
  },
  {
    name: "Mint Julep",
    glass: "Julep Cup",
    ingredients: ["Bourbon", "Mint", "Sugar", "Crushed Ice"],
    tags: ["herbal", "fresh", "classic"],
    baseSpirit: "Bourbon",
    garnish: "Mint Bouquet",
    strength: "medium",
    flavorProfile: ["mint", "caramel", "cooling"]
  },
  {
    name: "White Russian",
    glass: "Rocks Glass",
    ingredients: ["Vodka", "Coffee Liqueur", "Cream"],
    tags: ["creamy", "dessert", "rich"],
    baseSpirit: "Vodka",
    garnish: "None",
    strength: "medium",
    flavorProfile: ["coffee", "cream", "sweet"]
  },
  {
    name: "Long Island Iced Tea",
    glass: "Highball",
    ingredients: ["Vodka", "Gin", "Rum", "Tequila", "Triple Sec", "Lemon Juice", "Cola"],
    tags: ["boozy", "strong", "party"],
    baseSpirit: "Vodka",
    garnish: "Lemon Wedge",
    strength: "strong",
    flavorProfile: ["cola", "citrus", "mixed-spirit"]
  },
  {
    name: "Irish Coffee",
    glass: "Irish Coffee Glass",
    ingredients: ["Irish Whiskey", "Coffee", "Sugar", "Cream"],
    tags: ["warm", "dessert", "rich"],
    baseSpirit: "Irish Whiskey",
    garnish: "Cream",
    strength: "medium",
    flavorProfile: ["coffee", "caramel", "creamy"]
  },
  {
    name: "Singapore Sling",
    glass: "Highball",
    ingredients: ["Gin", "Cherry Liqueur", "Benedictine", "Pineapple Juice", "Lime Juice", "Grenadine", "Bitters"],
    tags: ["fruity", "complex", "tropical"],
    baseSpirit: "Gin",
    garnish: "Cherry & Pineapple",
    strength: "medium",
    flavorProfile: ["cherry", "pineapple", "herbal"]
  },
  {
    name: "Bellini",
    glass: "Champagne Flute",
    ingredients: ["Prosecco", "Peach Purée"],
    tags: ["light", "fruity", "brunch"],
    baseSpirit: "Prosecco",
    garnish: "None",
    strength: "light",
    flavorProfile: ["peach", "bubbly", "sweet"]
  },
  {
    name: "Vesper Martini",
    glass: "Martini Glass",
    ingredients: ["Gin", "Vodka", "Lillet Blanc"],
    tags: ["boozy", "elegant", "classic"],
    baseSpirit: "Gin",
    garnish: "Lemon Peel",
    strength: "strong",
    flavorProfile: ["dry", "botanical", "clean"]
  },
  {
    name: "Aviation",
    glass: "Coupe",
    ingredients: ["Gin", "Lemon Juice", "Maraschino", "Crème de Violette"],
    tags: ["floral", "classic", "light"],
    baseSpirit: "Gin",
    garnish: "Cherry",
    strength: "medium",
    flavorProfile: ["floral", "citrus", "lightly sweet"]
  },
  {
    name: "Amaretto Sour",
    glass: "Rocks Glass",
    ingredients: ["Amaretto", "Lemon Juice", "Egg White"],
    tags: ["sweet", "sour", "creamy"],
    baseSpirit: "Amaretto",
    garnish: "Cherry & Lemon Slice",
    strength: "light",
    flavorProfile: ["almond", "citrus", "smooth"]
  },
  {
    name: "Rum Punch",
    glass: "Highball",
    ingredients: ["Dark Rum", "Pineapple Juice", "Orange Juice", "Grenadine"],
    tags: ["tropical", "sweet", "fruity"],
    baseSpirit: "Dark Rum",
    garnish: "Orange Slice",
    strength: "medium",
    flavorProfile: ["tropical", "sweet", "citrus"]
  }
];
// This line was edited on laptop. 
let uniqueSpirits = [];
let uniqueIngredients = [];
let strengthLevels = [];
let uniqueFlavors = [];
let uniqueTags = [];

const spiritButtons = document.getElementById("spiritsList");
const mainContent = document.getElementById("main");

function getSpirits(cocktailList) {
  for (let i = 0; i < cocktailList.length; i++) {
    uniqueSpirits.push(cocktailList[i].baseSpirit);
  }
  uniqueSpirits = Array.from(new Set(uniqueSpirits));
}
function getStrength(cocktailList) {
  for (let i = 0; i < cocktailList.length; i++) {
    strengthLevels.push(cocktailList[i].strength);
  }
  strengthLevels = Array.from(new Set(strengthLevels));
}


function getIng(cocktailList) {
  for (let i = 0; i < cocktailList.length; i++) {
    for (let j = 0; j < cocktailList[i].ingredients.length; j++) {
      uniqueIngredients.push(cocktailList[i].ingredients[j]);
    }
  }
  uniqueIngredients = Array.from(new Set(uniqueIngredients));
}

function getFlavors(cocktailList) {
  for (let i = 0; i < cocktailList.length; i++) {
    for (let j = 0; j < cocktailList[i].flavorProfile.length; j++) {
      uniqueFlavors.push(cocktailList[i].flavorProfile[j]);
    }
  }
  uniqueFlavors = Array.from(new Set(uniqueFlavors));
}
function getTags(cocktailList) {
  for (let i = 0; i < cocktailList.length; i++) {
    for (let j = 0; j < cocktailList[i].tags.length; j++) {
      uniqueTags.push(cocktailList[i].tags[j]);
    }
  }
  uniqueTags = Array.from(new Set(uniqueTags));
}

function filterBySpirit(spirit) {
  let filteredList = [];
  console.log(`Looking for cocktails with base of : ${spirit}`);
  for (let i = 0; i < cocktails.length; i++) {
    if (cocktails[i].baseSpirit === spirit) {
      console.log(`Found : ${cocktails[i].name}`);
      filteredList.push(cocktails[i]);
    }
  }

  return filteredList;
}

function filterByStrength(str) {
  let filteredList = [];
  console.log(`Looking for cocktails with strength of : ${str}`);
  for (let i = 0; i < cocktails.length; i++) {
    if (cocktails[i].strength === str) {
      console.log(`Found : ${cocktails[i].name}`);
      filteredList.push(cocktails[i]);
    }
  }

  return filteredList;
}

function filterByIngredients(ing) {
  let filteredList = [];
  console.log(`Looking for cocktails with ingredients of : ${ing}`);
  let count;
  for (let i = 0; i < cocktails.length; i++) {
    count = 0;
    for (let j = 0; j < ing.length; j++) {
      if (cocktails[i].ingredients.includes(ing[j])) {
        count++
      }
    }
    if (count > 0) {
      filteredList.push(cocktails[i]);
      console.log(`:: ${cocktails[i].name} has ${count / ing.length * 100}% of ingredients you look for ::`);
    }
  }

  return filteredList;
}


getSpirits(cocktails);
getIng(cocktails);
getFlavors(cocktails);
getTags(cocktails);
getStrength(cocktails);
console.log(uniqueSpirits);
console.log(uniqueIngredients);
console.log(uniqueFlavors);
console.log(uniqueTags);
console.log(strengthLevels);

let filtered = filterBySpirit(uniqueSpirits[5]);
console.log(filtered);

filtered = filterByStrength(strengthLevels[2]);
console.log(filtered);

filtered = filterByIngredients([uniqueIngredients[4], uniqueIngredients[2]]);
console.log(filtered);


function createBtn(text) {
  const btn = document.createElement("li");
  btn.textContent = text;
  spiritButtons.appendChild(btn);
  btn.addEventListener("click", (e) => {
    filtered = filterBySpirit(text);
    mainContent.innerHTML = "";
    filtered.forEach((item) => createCocktailCard(item));

  })
}


for (let i = 0; i < uniqueSpirits.length; i++) {
  createBtn(String(uniqueSpirits[i]));
}


function showAll() {
  mainContent.innerHTML = "";
  for (let i = 0; i < cocktails.length; i++) {
    createCocktailCard(cocktails[i]);
  }
}


function createCocktailCard(cocktail) {
  let ings = "";
  for(ing of cocktail.ingredients){
    ings += `<li>${ing}</li>`;
  }
  let newCard = `<div class="cocktail-card">
            <h3 class="cocktail-title">${cocktail.name}</h3>
            <ul class="ingredients-list">
                ${ings}
            </ul>
            <p class="description">
                Lorem ipsum Atque sed, delectus 
            </p>
        </div>`;
  mainContent.innerHTML += newCard;
}
for (let x = 0; x < 10; x++) {
  createCocktailCard(cocktails[x]); 
}

//search

const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("keyup",()=>{
  let curQuery = searchBar.value.trim();
  
  console.log(curQuery);
})