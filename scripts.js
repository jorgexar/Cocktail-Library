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

// Im too lazy to rewrite the properties.
for (let i = 0; i < cocktails.length; i++) {
  cocktails[i].id = i;
  cocktails[i].liked = false;
}


let activeFilters = {
  spirit: null,
  ingredients: [],
  strength: null
};
const mainContent = document.getElementById("main");
const spiritList = document.getElementById("spiritsList");
const ingList = document.getElementById("ingFilters");

const MAX_ITEMS_PER_PAGE = cocktails.length;
for (let x = 0; x < MAX_ITEMS_PER_PAGE; x++) {
  createCocktailCard(cocktails[x]);
}

const uniqueValues = {
  spirits: getUniqueValues(cocktails, "baseSpirit"),
  ingredients: getUniqueValues(cocktails, "ingredients"),
  strengths: getUniqueValues(cocktails, "strength"),
  flavors: getUniqueValues(cocktails, "flavorProfile"),
  tags: getUniqueValues(cocktails, "tags")
};

const likedCocktails = [];




const radioSpirits = uniqueValues.spirits.map(spirit => createRadio(spirit));
populateList(spiritList, radioSpirits);

const ingCheckboxes = uniqueValues.ingredients.map(ing => createCheckbox(ing));
populateList(ingList,ingCheckboxes);

function getUniqueValues(cocktailList, attribute = null) {
  let unique = [];
  if (!attribute) {
    return [];
  }

  if (Array.isArray(cocktailList[0][attribute])) {
    unique = cocktailList.flatMap(cocktail => cocktail[attribute]);
  } else {
    unique = cocktailList.map(cocktail => cocktail[attribute]);
  }
  return Array.from(new Set(unique)).sort();
}



///FILTERS
function setFilterSpirit(spirit) {
  activeFilters.spirit = spirit;
}

function setFilterIngredients(ingredient) {
  if(activeFilters.ingredients.includes(ingredient)){
    let index = activeFilters.ingredients.indexOf(ingredient)
    console.log(activeFilters.ingredients[index]);
    activeFilters.ingredients.splice(index,1);
    console.log(activeFilters);
  }else{

    activeFilters.ingredients.push(ingredient);
  }
}

function setFilterStrength(strength) {
  activeFilters.strength = strength;
}

function applyFilters(filters) {
  let filteredList = cocktails;
  if (filters.spirit) {
    filteredList = filteredList.filter(cocktail => cocktail.baseSpirit === filters.spirit);
    let percentage = ((filteredList.length / cocktails.length) * 100).toFixed(2);
    console.log(`Filtered by spirit: ${filters.spirit} - ${filteredList.length} cocktails found (${percentage}%)`);
  }
  if (filters.ingredients.length > 0) {
    filteredList = filteredList.filter(cocktail => { return filters.ingredients.some(i => cocktail.ingredients.includes(i)) });
  }
  if (filters.strength) {
    filteredList = filteredList.filter(cocktail => cocktail.strength === filters.strength);
    let percentage = ((filteredList.length / cocktails.length) * 100).toFixed(2);
    console.log(`Filtered by strength: ${filters.strength} - ${filteredList.length} cocktails found (${percentage}%)`);
  }
  return filteredList;
}
function resetFilters() {
  activeFilters = {
    spirit: null,
    ingredients: [],
    strength: null
  };
}
function runFilters() {
  renderFiltered(applyFilters(activeFilters));
}

function showAll() {
  resetFilters();
  mainContent.innerHTML = "";
  for (let i = 0; i < cocktails.length; i++) {
    console.log(cocktails[i])
    mainContent.appendChild(createCocktailCard(cocktails[i]));
  }
}

function renderFiltered(filteredList) {
  mainContent.innerHTML = "";
  if (filteredList.length === 0) {
    mainContent.innerHTML = "<h2 style='text-align: center; width: 100%;'>No cocktails match the selected filters.</h2>";
    return;
  }
  for (let i = 0; i < filteredList.length; i++) {
    if (i > MAX_ITEMS_PER_PAGE) break;
    console.log(`:: ${filteredList[i].name} ::`);
    // createCocktailCard(filteredList[i]);
    mainContent.appendChild(createCocktailCard(filteredList[i]));
  }
}
///FILTERS END

function createRadio(spirit) {
  let radioWrap = document.createElement("div");
  radioWrap.classList.add("radio-option");
  const radio = document.createElement("input");
  radio.setAttribute('type','radio');
  radio.setAttribute('name','spirit');
  radio.setAttribute('id',`sprt-${spirit}`);
  radio.setAttribute('value',`${spirit}`);

  radio.addEventListener('click',()=>{
    setFilterSpirit(spirit);
    runFilters();
  })


  const label = document.createElement("label");
  label.setAttribute("for",`sprt-${spirit}`);
  label.textContent = `${spirit}`;
  
  radioWrap.appendChild(radio);
  radioWrap.appendChild(label);
  return radioWrap;
}

function createCheckbox(ingredient) {
  let box = document.createElement("div");
  box.classList.add("radio-option");
  const checkBox = document.createElement("input");
  checkBox.setAttribute('type','checkbox');
  checkBox.setAttribute('name','ingredient');
  checkBox.setAttribute('id',`ing-${ingredient}`);
  checkBox.setAttribute('value',`${ingredient}`);
  checkBox.addEventListener('click',()=>{
    setFilterIngredients(ingredient);
    runFilters();
  });
  const label = document.createElement("label");
  label.setAttribute("for",`ing-${ingredient}`);
  label.textContent = ingredient;

   
  box.appendChild(checkBox);
  box.appendChild(label);
  return box;
}
function populateList(list,arr){
  for(let item of arr){
    list.appendChild(item);
  }
  return list;
}



function createCocktailCard(cocktail) {
  const cocktailCard = document.createElement("div");
  cocktailCard.classList.add("cocktail-card");

  const title = document.createElement("h3");
  title.classList.add("cocktail-title");
  title.textContent = `${cocktail.name}`;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const baseSpirit = document.createElement("p");
  baseSpirit.classList.add("base-spirit");
  baseSpirit.textContent = `Base Spirit: ${cocktail.baseSpirit}`;

  const description = document.createElement("p");
  description.textContent = `Ingredients : ${cocktail.ingredients.join(",")}`;

  const strengthIndicator = document.createElement('div');
  strengthIndicator.classList.add("strength-indicator");
  strengthIndicator.classList.add(cocktail.strength);
  strengthIndicator.textContent = cocktail.strength;

  const cardFooter = document.createElement("div");
  cardFooter.classList.add('card-footer');

  const likeButton = document.createElement("button");
  likeButton.classList.add("like-button");
  likeButton.addEventListener("click",()=>{
    toggleLike(cocktail.id, likeButton);
  });
  likeButton.textContent = `${cocktail.liked ? '❤️' : '🤍'}`;

  cardFooter.appendChild(likeButton);
  cardBody.appendChild(baseSpirit);
  cardBody.appendChild(description);
  cocktailCard.appendChild(title);
  cocktailCard.appendChild(cardBody);
  cocktailCard.appendChild(strengthIndicator);
  cocktailCard.appendChild(cardFooter);
  return cocktailCard;
};

function toggleLike(cocktailId, btn) {
  const cocktail = cocktails.find(c => c.id === cocktailId);
  if (cocktail) {
    cocktail.liked = !cocktail.liked;
    btn.innerHTML = `${cocktail.liked ? '❤️' : '🤍'}`; 
    if (cocktail.liked) {
      likedCocktails.push(cocktail);
      btn.classList.add("liked");
    } else {
      const index = likedCocktails.findIndex(c => c.id === cocktailId);
      btn.classList.remove("liked");
      if (index !== -1) {
        likedCocktails.splice(index, 1);
      }
    }
    console.log("Liked Cocktails:", likedCocktails);
  } else {
    console.error("Cocktail not found with ID:", cocktailId);
  }   
}

// Initial Render
showAll();
