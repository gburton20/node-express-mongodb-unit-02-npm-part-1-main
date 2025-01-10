/*
    1. Import express & Morgan, set up app variable
*/
const express = require('express');
const logger = require('morgan');

const app = express();

/*
    2. Set up middleware to read requests better
*/

// Logging all incoming requests and outgoing responses
app.use(logger('dev')); 
// Parsing JSON in the request body
app.use(express.json());

/*
    3. Set up local data to work with
*/

const pokeData = [
    {
        id: 1,
        name: "pikachu",
        type: "electric",
        pokedex: 25,
    },
    {
        id: 2,
        name: "bulbasaur",
        type: "grass",
        pokedex: 1,
    },
];

/*
    4. Handle get requests to localhost:3000/pokemons    
*/

app.get('/pokemons', (req, res) => {
    if (req.query.name === undefined) {
        res.status(200).json({message: 'success', payload: pokeData});
        
        return;
    }

    // We now know there is a request.query.name - specifically there was a name query parameter entered by the client:
    // let foundPokemon = undefined;
    // for (const pokemon of pokeData) {
    //     if (pokeman.name === req.query.name) {
    //         foundPokemon = pokemon;
    //     }
    // }

    const foundPokemon = pokeData
        .find((pokemon) => pokemon.name === req.query.name);
    if (foundPokemon) { // If there is a Pokemon that exists with the same name as the client query
        res.status(200).json({
            message: 'success', 
            payload: foundPokemon,
        });
    } else {
        res.status(404).json({
            message: 'failure',
            payload: 'No pokemon found by that name',
        });
    }
})

// Falsey values in .js
    // Undefined
    // null
    // 0
    // ''
    // NaN
    // false
/*
    5. Set up the ability to query for a specific item in the data set
  */
// 5a. Set up for if the client requested a pokemon with a query

// 5b. Use .find to search for the pokemon in the data

// 5c. If the pokemon isn't found it will be undefined, send back a failure message

// 5d. if the pokemon IS found, send back a success message, with the pokemon that was found

// 4a. respond with the entire pokeData object if you DON'T input pokemon

/*
    6. Handle post requests to localhost:3000/pokemons
*/

app.post('/pokemons', (req, res) => {
    const isAlreadyCreated = pokeData.some((pokemon) => pokemon.name === req.body.name);
    if (isAlreadyCreated) {
        res.status(500).json({
            message: 'failure', 
            payload: 'A Pokemon by that name already exists'
        });

        return;
    }

    pokeData.push(req.body);
    // console.log(req.body);
    res.status(201).json({
        message: 'success', 
        payload: pokeData
    });
});

// If we are sending a successful response, or failing, the .payload will include the meta data on what happened
// const response = fetch.post('pokemon.api/pokemons');
//     if (response.message === 'success') {
//         displayPokemon(response.payload);
//     } else {
//         displayError(response.payload);
//     }

/*
    7. Handle patch requests to localhost:3000/pokemons/:name
*/

// Use dynamic params to identify which item to update:
// ALSO use request body for how it should be updated.
// Finally, updating objects is... tough!

// PATCH can send a lot less data. 

app.patch('/pokemons/:name', (req, res) => {
    const incomingData = req.body;
    const originalPokemon = pokeData.find((pokemon) => pokemon.name === req.params.name);
    if (originalPokemon === undefined) {
        res.status(404).json({
            message: 'Failure',
            payload: `No Pokemon by that name ${req.params.name}.`
        });
    }

    // I will combine the new incomingData with the originalPokemon object
    Object.assign(originalPokemon, incomingData);

    res.status(200).json({
        message: 'Success',
        payload: originalPokemon,
    });
});

// PUT sends/replaces the entire object
// Pseudo code for BASIC outline of a PUT request
// Easier than PATCH...
app.put('/pokemons', () => {
    const i = pokeData.findIndex();
    pokeData[i] = req.body;
})


/*
    8. Handle delete requests to localhost:3000/pokemons/:name
*/
app.delete('/pokemons/:name', (req, res) => {
    console.log(req.params);
    const i = pokeData.findIndex((pokemon) => pokemon.name === req.params.name);
    if (i === -1) {
        res.status(404).json({
            message: 'failure',
            payload: 'No pokemon by that name to delete.',
        })

    return;
    }
    
    const deletedPokemon = pokeData.splice(i,1)[0];
    res.status(200).json({
        message: 'success',
        payload: deletedPokemon,
    });
});

/*
    9. Handle any unhandled URL extensions as an error
*/


/*
    4b. Set up PORT and begin listening to requests
*/
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
