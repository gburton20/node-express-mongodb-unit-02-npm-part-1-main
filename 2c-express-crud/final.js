/*
    1. Import express & Morgan, set up app variable
*/
const express = require("express");
const logger = require("morgan");
const app = express();

/*
    2. Set up middleware to read requests better
*/
// Helps to see incoming req.body object
app.use(express.json());
// Gives you full logs of requests and responses. Great for debugging.
app.use(logger("dev"));
// Allows us to parse form data
app.use(express.urlencoded({ extended: false }));

/*
    3. Set up local data to work with
*/
let pokeData = [{ id: 1, name: "pikachu", type: "electric", number: 25 }];

/*
    4. Handle GET requests to localhost:3000/pokemons
*/
app.get("/pokemons", (req, res) => {
  /*
    5. Set up the ability to query for a specific item in the data set
  */

  // 5a. Set up for if the client requested a pokemon with a query
  if (req.query.name) {
    // 5b. Use .find to search for the pokemon in the data
    const foundPokemon = pokeData.find((pokemon) => pokemon.name === req.query.name); // req.query.name is the ?name=pikachu in the URL

    // 5c. If the pokemon isn't found it will be undefined, send back a failure message
    if (foundPokemon === undefined) {
      res.status(404).json({
        message: "failure",
        payload: "pokemon not found",
      });
      // 5d. if the pokemon IS found, send back a success message, with the pokemon that was found
    } else {
      res
        .status(200)
        .json({ message: "success", payload: foundPokemon });
    } // end of if/else statement when query exists

    // 4a. respond with the entire pokeData object if you DON'T input pokemon
  } else {
    res.status(200).json({ message: "success", payload: pokeData });
  } // end of if/else a query exists
}); // end of Get "/pokemons"

/*
    6. Handle POST requests to localhost:3000/pokemons
*/
app.post("/pokemons", (req, res) => {
  // 6a. Search to see if the pokemon already exists in the data
  const foundPokemon = pokeData.find((pokemon) => pokemon.name === req.body.name);

  // 6b. Send back a failure if you try to put in a pokemon that exists already
  if (foundPokemon) {
    res.status(500).json({
      message: "failure",
      payload: "Pokemon already exists, cannot add",
    });
    // 6c. Save the pokemon if it doesn't exist yet
  } else {
    pokeData.push(req.body);
    res.status(200).json({ message: "success", payload: pokeData });
  } // end of if/else statement
}); // end of Post "/pokemons"

/*
    7. Handle PATCH requests to localhost:3000/pokemons/:name
*/
app.patch("/pokemons/:name", (req, res) => {
  // dynamic param, /:name is dynamic

  // 7a. Find the pokemon you want to change
  const foundPokemon = pokeData.find((pokemon) => pokemon.name === req.params.name);

  // 7b. Send a failure message if pokemon isn't found
  if (foundPokemon === undefined) {
    res.status(500).json({
      message: "failure",
      payload: "pokemon not found",
    });

    // 7c. Target a pokemon, and change the object with a new object
  } else {
    //let copy = Object.assign(a, b)
    const incomingObj = req.body;


    // for (const property in foundPokemon) {
    //   if (incomingObj[property]) {
    //     foundPokemon[property] = incomingObj[property];
    //   }
    // }

    // another way to do it:
    Object.assign(foundPokemon, incomingObj);

    res.status(200).json({ message: "success", payload: foundPokemon });
  } // end of if/else statement
}); // end of PATCH "/pokemons/:name"

/*
    8. Handle DELETE requests to localhost:3000/pokemons/:name
*/
app.delete("/pokemons/:name", (req, res) => {
  // 8a. Find the pokemon you want to delete
  // We search for the index instead of the item directly
  // so we can remove the pokemon from the array using splice later.

  let foundPokemonIndex = pokeData.findIndex((pokemon) => pokemon.name === req.params.name);

  // 8b. Send a failure if the pokemon isn't found--findIndex returns -1 when there's no match
  if (foundPokemonIndex === -1) {
    res.status(500).json({
      message: "failure",
      payload: "pokemon not found",
    });

    // 8c. Remove the found pokemon and send a success message
  } else {
    pokeData.splice(foundPokemonIndex, 1);

    res.status(200).json({ message: "success", payload: pokeData });
  } // end of if/else statement
}); // end of DELETE "/pokemons/:name"

/*
    9. Handle any unhandled URL extensions as an error
*/
app.all("*", (req, res) => {
  res.status(404).send("<h1>page not found</h1>");
});

/*
    4b. Set up PORT and begin listening to requests
*/
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
