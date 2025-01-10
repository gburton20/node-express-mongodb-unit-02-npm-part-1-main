// Things such as "Bread", "Cheese", "Condiments" are all Ingredient Types. Things like "Cheddar", "Salami", "Ketchup" are the ingredients.

// Your task is to create a server with routes to perform the following actions:

// - `R`ead all available ingredients for all ingredient types
// - `R`ead all available ingredients for ONE ingredient type (Hint: Use Queries)
// - `C`reate a new ingredient (Hint: Use Dynamic Parameters for the ingredient type and the request body to accept data)
// - `U`pdate the ingredients list for one ingredient type, i.e., replace the ingredients list with a new list (Hint: Use Dynamic Parameters for the ingredient type and the request body to accept the new list)
// - `D`elete an ingredient (Hint: Use Dynamic Parameters to know which ingredient to remove, and optionally a Dynamic Parameter to narrow down which ingredient type it's in)

const express = require('express');

const app = express();

app.use(express.json());

const ingredients = {
    "bread": [
        "white",
        "wheat",
        "sourdough",
        "rye",
        "multigrain"
    ],

    "meat": [
        "turkey",
        "ham",
        "roast beef",
        "chicken",
        "bacon",
        "salami"
    ],

    "cheese": [
        "cheddar",
        "swiss",
        "provolone",
        "mozzarella",
        "pepper jack"
    ],

    "veggies": [
        "lettuce",
        "tomato",
        "onion",
        "cucumber",
        "bell pepper",
        "spinach",
        "avocado"
    ],

    "condiments": [
        "mayonnaise",
        "mustard",
        "ketchup",
        "relish",
        "hot sauce",
        "ranch dressing"
    ]
}

app.get('/ingredients', (req, res) => {
    res.json(ingredients);
});

app.get('/ingredients/:category', (req, res) => {
    const category = req.params.category;
    if (ingredients[category]) {
        res.json(ingredients[category]);
    } else {
        res.status(404).send('Category Not Found');
    }
});

app.post('/ingredients/:category/', (req, res) => {
    const category = req.params.category;
    const ingredient = req.body.name;
    if (ingredients[category]) {
        ingredients[category].push(ingredient);
        res.json(ingredients[category]);
    } else {
        res.status(404).send('Category Not Found');
    }
});

app.put('/ingredients/:category/', (req, res) => {
    const category = req.params.category;
    const newIngredients = req.body.ingredients;
    if (ingredients[category]) {
        ingredients[category] = newIngredients;
        res.json(ingredients[category]);
    } else {
        res.status(404).send('Category Not Found');
    }
});

app.delete('/ingredients/:category/:ingredient', (req, res) => {
    const category = req.params.category;
    const ingredient = req.params.ingredient;
    if (ingredients[category]) {
        const index = ingredients[category].indexOf(ingredient);
        if (index > -1) {
            ingredients[category].splice(index, 1);
            res.json(ingredients[category]);
        } else {
            res.status(404).send('Ingredient Not Found');
        }
    } else {
        res.status(404).send('Category Not Found');
    }
});  

// optionally, without the category parameter
app.delete('/ingredients/:ingredient', (req, res) => {
    const ingredient = req.params.ingredient;
    for (const category in ingredients) {
        const index = ingredients[category].indexOf(ingredient);
        if (index > -1) {
            ingredients[category].splice(index, 1);
            res.json(ingredients[category]);
            return;
        }
    }

    res.status(404).send('Ingredient Not Found');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${ PORT }`);
});