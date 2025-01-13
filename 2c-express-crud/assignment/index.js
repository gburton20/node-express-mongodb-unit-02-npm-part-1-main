// Import Express & Morgan:
const express = require('express');
const logger = require('morgan');

// Import the sandwichIngredientTypes.js file which contains the sandwichIngredientTypes parent object
const sandwichIngredientTypes = require('./sandwichIngredientTypes');

// Declare the 'app' variable equivalent to the const variable:
const app = express();

// Setup middleware to 'read' API;
// a) Log all incoming requests and outgoing responses via Morgan (see line 3). Or, adds logging in your terminal for requests and responses:
app.use(logger('dev'));
// b) Parse JSON in the request body via express (see line 2). Or adds parsing of incoming JSON in the request body.:
app.use(express.json());
// c) Adds parsing of query parameters:
app.use(express.urlencoded({extended: false}));

// Set up PORT and begin listening to requests
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

//'C'reate, POST, a new ingredient
// A new ingredient is a new array item within each ingredientType object.
// The hint is to use dynamic params to identify ONE resource matching the description of the proposed new ingredient
// First I must check if the new ingredient the user wants to POST already exists in the ingredientType object via a guard statement
// In the isIngredientAlreadyHere guard statement, I'm querying each array of each sandwichIngredientTypes key:

// My first attempt, which added a 'null' value to the object key in question (i.e. localhost:3033/allAvailableIngredients/bread/bloomer = payload: [... "multigrain", null]):

// app.post('/allAvailableIngredients/:ingredientType/:newIngredient', (req, res) => {
//     const isIngredientAlreadyHere = sandwichIngredientTypes[req.params.ingredientType.ingredient]
//     if (isIngredientAlreadyHere) {
//         res.status(500).json({
//             message: 'Failure',
//             payload: 'An ingredient with that name already exists'
//         });
        

//         return;

//     } else {
//         sandwichIngredientTypes[req.params.ingredientType].push(req.params.ingredientType.newIngredient)
//         res.status(200).json({
//             message: 'Success!',
//             payload: sandwichIngredientTypes[req.params.ingredientType]
//         })

        
//         return;
//     }
// });

// Colin's solution
app.post('/ingredients/:category', (req, res) => {
    const category = req.params.category;
    if (!sandwichIngredientTypes[category] === undefined) {
        res.status(404).json({
            message: 'Failure',
            payload: `${category} is not a category in our ingredients`
        })

        return;
    }

    if (req.body.name === undefined) {
        res.status(400).json({
            message: 'Failure',
            payload: "Request body must include a 'name' property"
        });

        return;
    }

    sandwichIngredientTypes[category].push(req.body.name);
    res.status(200).json({
        message: 'Success',
        payload: sandwichIngredientTypes[category]
    });
});

// Colin's nested if/else solution (messy and not advised!). See callbackhell.com:
// app.post('/ingredients/:category', (req, res) => {
//     const category = req.params.category;
//     const ingredient = req.body.name;
//     if (ingredients[category]) {
//         if (ingredient) {
//             if (ingredients[category].includes(ingredient)) {
//                 // Send error message
//             } else {

//             }
//         }
//         ingredients[category].push(ingredient);
//         res.json(ingredients[category]);
//     } else {
//         res.status(404).send('Category Not Found');
//     }
// });

// Solution from final.js (uses if/elses rather than Colin's guard statement approach)
// The key to this exercise is the dynamic param. 
// app.post('/allAvailableIngredients/:ingredientType', (req, res) => {
//     const category = req.params.category;
//     const ingredient = req.body.name;
//     if (ingredients[category]) {
//         ingredients[category].push(ingredient);
//         res.json(ingredients[category]);
//     } else {
//         res.status(404).send('Category Not Found');
//     }
// });

// My GET solutions

//‘R’ead, GET, all available ingredients for all ingredient types
// allavailableingredients is an endpoint on the server I've created in this file

// app.get('/allAvailableIngredients/', (req, res) => {
//     if (req.params.name === undefined){
//         res.status(200).json({
//             message: 'Success',
//             payload: sandwichIngredientTypes
//         });
//     } else {
//         res.status(404).json({
//             message: 'Failure',
//             payload: 'No sandwich data here'
//         });
//     }
// });

//'R’ead, GET, all ingredients from one (var param input appended to the client's request URL) ingredientType:

// app.get("/allAvailableIngredients/:ingredientType", (req, res) => {
//     const allIngredientsPerQueriedIngredientType = sandwichIngredientTypes[req.params.ingredientType];
//     if(allIngredientsPerQueriedIngredientType) {
//         res.status(200).json({
//             message: `Success!`,
//             payload: allIngredientsPerQueriedIngredientType
//         }) 
//     } else {
//         res.status(200).json({
//             message: "Sorry, we couldn't find that ingredient type! Here's the entire list of our sandwich ingredient types and options for each",
//             payload: sandwichIngredientTypes
//         })
//     }
// });

// Colin's GET pt.1 solution (returning all ingredient data)
app.get('/ingredients', (req, res) => {
    res.status(200).json(sandwichIngredientTypes);
});

// Colin's GET pt.2 solution (returning one ingredient type)
app.get('/ingredients/:category', (req, res) => {
    const category = req.params.category;
    if (sandwichIngredientTypes[category] === undefined) {
        res.status(404).json({
            message: 'Failure',
            payload: `${category} is not a category in our ingredients.`
        })
    }
})

// 'U'pdate, PUT, the ingredients for one ingredient type, i.e. replace the ingredients list with a new list

// My solution (did not start as I got stuck on POST):

// Colin's solution:
// PUT localhost:3000/ingredients/[category]
app.put('/ingredients/:category', (req, res) => {
    sandwichIngredientTypes[req.params.category] = req.body; 
    res.status(200).json({
        message: 'Success',
        payload: sandwichIngredientTypes
    })
});

// Solution from final.js:
// app.put('/allavailableingredients/:ingredientType', (req, res) => {
//     const ingredientType = req.params.ingredientType;
//     const newIngredients = req.body.ingredients;
//     if (sandwichIngredientTypes[ingredientType]) {
//         sandwichIngredientTypes[ingredientType] = newIngredients;
//         res.json(sandwichIngredientTypes[ingredientType]);
//     } else {
//         res.status(404).send('Category Not Found');
//     }
// });

// 'D'estroy, DELETE, an ingredient

// Use splice(), first find category then index position, then splice()

// My solution (incomplete as I got stuck on POST):
// app.delete('/allavailableingredients/:ingredientType', (req, res) => {
//     const i = 
//     if ()
// });

// Colin's solution:
// localhost:3000/ingredients/[category]/[ingredientName]
app.delete('ingredients/:category/:ingredientName', (req, res) => {
    const category = req.params.category;
    const ingredientName = req.params.ingredientName;
    // Advanced way of combining two variables:
    // const {category, ingredientName} = req.params;
    if (sandwichIngredientTypes[category] === undefined) {
        res.status(404).json({
            message: 'Failure', 
            payload: `${category} isn't in our ingredients.`
        });

        return;
    }

    if (sandwichIngredientTypes[category].includes(ingredientName) === false) {
        res.status(404).json({
            message: 'Failure', 
            payload: `${ingredientName} doesn't exist in ${category}`
        });

        return;
    }

    // Find the index, and splice the value out:
    const i = sandwichIngredientTypes[category].indexOf(ingredientName);
    sandwichIngredientTypes[category].splice(i, 1);
    res.status(200).json({
        message: 'Success',
        payload: sandwichIngredientTypes[category]
    });
});
