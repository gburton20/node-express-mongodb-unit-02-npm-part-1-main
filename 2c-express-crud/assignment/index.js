// Import Express & Morgan:
const express = require('express');
const logger = require('morgan');

// Import the sandwichIngredientTypes.js file which contains the sandwichIngredientTypes parent object
const sandwichIngredientTypes = require('./sandwichIngredientTypes');

// Declare the 'app' variable equivalent to the const variable:
const app = express();

// Setup middleware to 'read' API;
    // a) Log all incoming requests and outgoing responses:
app.use(logger('dev'));
    // b) Parse JSON in the request body:
app.use(express.json());

// Set up PORT and begin listening to requests
const PORT = 3033;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

//'C'reate, POST, a new ingredient
// A new ingredient is a new array item within each ingredientType object.
// The hint is to use dynamic params to identify ONE resource matching the description of the proposed new ingredient
// First I must check if the new ingredient the user wants to POST already exists in the ingredientType object via a guard statement
app.post('/allAvailableIngredients/:newIngredient', (req, res) => {
    // In the isIngredientAlreadyHere guard statement, I'm querying each array of each sandwichIngredientTypes key:
    const isIngredientAlreadyHere = sandwichIngredientTypes[req.params.ingredientType]
    if (isIngredientAlreadyHere) {
        res.status(500).json({
            message: 'Failure',
            payload: 'An ingredient with that name already exists'
        });
        
        return;
    }

    sandwichIngredientTypes[req.params.ingredientType].push(req.params.newIngredient)
    res.status(200).json({
        message: 'Success!',
        payload: sandwichIngredientTypes
    })
    
})

//‘R’ead, GET, all available ingredients for all ingredient types
// allavailableingredients is an endpoint on the server I've created in this file

app.get('/allAvailableIngredients/', (req, res) => {
    if (req.params.name === undefined){
        res.status(200).json({
            message: 'Success',
            payload: sandwichIngredientTypes
        });
    } else {
        res.status(404).json({
            message: 'Failure',
            payload: 'No sandwich data here'
        });
    }
});

app.get("/allAvailableIngredients/:ingredientType", (req, res) => {
    const allIngredientsPerQueriedIngredientType = sandwichIngredientTypes[req.params.ingredientType];
    if(allIngredientsPerQueriedIngredientType) {
        res.status(200).json({
            message: `Success!`,
            payload: allIngredientsPerQueriedIngredientType
        }) 
    } else {
        res.status(200).json({
            message: "Sorry, we couldn't find that ingredient type! Here's the entire list of our sandwich ingredient types and options for each",
            payload: sandwichIngredientTypes
        })
    }
})



//'R’ead, GET, all ingredients from one (var param input appended to the client's request URL) ingredientType 
// app.get('/allavailableingredients/:ingredientType', (req, res) => {
    
    
// });

// 'U'pdate, PUT, the ingredients for one ingredient type, i.e. replace the ingredients list with a new list
// app.put('/allavailableingredients/:ingredientType', () => {
//     const i = ;
//     sandwichIngredientTypes[] = ;
// })

// 'D'estroy, DELETE, an ingredient
// Use splice(), first find category then index position, then splice()
// app.delete('/allavailableingredients/:ingredientType', (req, res) => {
//     const i = 
//     if ()
// });


