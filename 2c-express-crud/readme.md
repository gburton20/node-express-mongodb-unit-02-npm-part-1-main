# 2B: Express-CRUD

---

## What this lesson covers:

- What is Morgan
- What is CRUD
- Download Postman
- Dynamic parameters - queries

---

In this section of the lesson, we will be learning how to interact with data through a server.

Of course before we get started, we have to initialize the application:

0. A) In terminal, initialize the project

```
npm init -y
```

Also install the necessary modules:

0. B) In terminal, install the express module and morgan module

```
npm install express morgan
```

## What is Morgan

Morgan is a Middleware that helps Express by reading requests from the client, and making things such as the Status Code easier to read in the terminal.

For an example of Middleware, let's take a look at **middleware.js**

```js
app.use((request, response, next) => {
  console.log(request.headers);
  next(); // move to the next function
});

app.use((request, response, next) => {
  request.chance = Math.random() * 10;
  next(); // move to the next function
});
```

These 2 blocks of code are the middleware on this application file. When a request is made to `localhost:3000/`, the middleware is preparing a console log of metadata from the request, and preparing a random number between 1 and 10. It's attached to the request object so that we have access to it from function to function. Then, it's sent back in JSON when we arrive at this next block of code:

```js
app.get("/pokemons", (request, response) => {
  response.json({
    chance: request.chance,
  });
});
```

This block of code is something we are familiar with. It handles the response to accessing `localhost:3000/`. When someone accesses it, they will see the random number, and the console will show the headers of the request that was made.

- Run command `node middleware.js` and visit `localhost:3000/` to demonstrate this. If you refresh the page, you will notice that the random number is random every time, which demonstrates that the first 2 blocks of code are ready to be run once per request to `localhost:3000/`.
- Press `ctrl + c` to shut down the server.

## What is CRUD

CRUD is an acronym that refers to the 4 functions that are considered necessary to implement a persistent storage application:

- `C`reate
- `R`ead
- `U`pdate
- `D`estroy

## Download Postman

- https://www.postman.com/downloads/
- Go through the download & install process

Let's finally get started on working in **index.js**:

1. Import express & Morgan, set up app variable

```js
const express = require("express");
const logger = require("morgan");
const app = express();
```

Where I do `const logger = require("morgan")`, take note that the name of the variable associated with the module can be anything! In this case, I call it "logger" because Morgan's job is to log request information to the console.

Next, let's set up some middleware that allows our API to receive JSON and accept dynamic parameters in the URL:

2. Set up middleware to read requests better

```js
// Helps to see outgoing req.body object
app.use(express.json());
// Colorizes status codes
app.use(logger("dev"));
// Allows us to parse form data
app.use(express.urlencoded({ extended: false }));
```

There is no database yet, so we will be testing things with this local set of data. Let's write it in:

3. Set up local data to work with

```js
let pokeData = [
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
```

Next, we're going to set up a GET request handler for `localhost:3000/pokemons` where the client will receive the local data we just set up:

4. Handle get requests to localhost:3000/pokemons

```js
app.get("/pokemons", (req, res) => {
  // 4a. respond with the entire playerData object
  res.status(200).json({ message: "success", payload: pokeData });
}); // end of Get "/pokemons"
```

Don't forget the `.listen()` function at the bottom!

4. B) Set up PORT and begin listening to requests

```js
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
```

- Run the server by going to the terminal and using the command `node index.js`
- Use Postman to perform a GET request to `localhost:3000/pokemons`
- Once it works, cut the server off by pressing `ctrl + c` in the terminal

Let's go back into the `app.get()` function and set up the ability to get a specific item from our data set:

## Queries

Queries are a way to ask for information by placing text after the URL extention. URL extensions can be used to reach different web pages, but the text beyond that can be captured in order to search a database for specific items. For example, if we want to target `pikachu` within our data, the URL should read `localhost:3000/pokemons?name=pikachu`. The `?name=pikachu` is the query, `req.query` is what holds the value `{name:"pikachu"}`.

5. Handle query requests

```js
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
```

Note: If you are unsure where values are coming from / going, make sure to console.log things step by step!

- Run the server by going to the terminal and using the command `node index.js`
- Use Postman to perform a GET request to `localhost:3000/pokemons` and in the Params tab, make sure to use a name that matches the data. Also test a name that doesn't match the data, so you can see what a failure looks like.
- Once it works, cut the server off by pressing `ctrl + c` in the terminal

---

Next is the POST request. When testing this in Postman, look under the URL where it says "Params Auth Headers Body" and select `Body`. From the dropdown that says "none" by default, change it to `raw` and change the next dropdown that says "text" to `JSON`. The object written in there will be represented by `req.body`.

6. Handle post requests to localhost:3000/pokemons

```js
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
```

- Run the server by going to the terminal and using the command `node index.js`
- Use Postman to perform a POST request to `localhost:3000/pokemons` and in the Body tab (set text to raw JSON) use the following to test this request:

```js
{
    "id": 3,
    "name": "squirtle",
    "type": "water",
    "pokedex": 7
}
```

- Once it works, cut the server off by pressing `ctrl + c` in the terminal

---

### Dynamic Parameters

Next is the PATCH request. Here we will use something called Dynamic Parameters to target the data we would like to edit/update. The `/:name` means that if the URL is `localhost:3000/pokemons/pikachu`, the `req.params` will be `{ name: "pikachu" }`. It's similar to the Query, but Queries are usually used for filtering large data (look at the URL when navigating products on a website such as Adidas.com) while Dynamic Parameters are used for targeting specific data points in a database.

7. Handle PATCH requests to localhost:3000/pokemons/:name

```js
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
```

- Run the server by going to the terminal and using the command `node index.js`
- Use Postman to perform a PATCH request to `localhost:3000/pokemons/:name` and in the Body tab (set text to raw JSON), make sure to fill it with the keys that match the keys of the original data, and fill the values with unique values. Also test a name that doesn't match the data, so you can see what a failure looks like.
- Once it works, cut the server off by pressing `ctrl + c` in the terminal

---

Next is the DELETE request. Again, we will be using Dynamic Parameters

8. Handle delete requests to localhost:3000/pokemons/:name

```js
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
```

- Run the server by going to the terminal and using the command `node index.js`
- Use Postman to perform a DELETE request to `localhost:3000/:name`. Also test a name that doesn't match the data, so you can see what a failure looks like.
- Once it works, cut the server off by pressing `ctrl + c` in the terminal

---

Finally, let's cover all unhandled URL extensions:

9. Handle any unhandled URL extensions as an error

```js
app.all("*", (req, res) => {
  res.status(404).send("<h1>page not found</h1>");
});
```

---

SUMMARY:

| CRUD   | Request Verb | Input                                  |
| ------ | ------------ | -------------------------------------- |
| Create | POST         | Request Body                           |
| Read   | GET          | URL + (optionally) Query Parameters    |
| Update | PATCH        | URL + Request Body + Dynamic Parameter |
| Delete | DELETE       | URL + Dynamic Parameter                |
