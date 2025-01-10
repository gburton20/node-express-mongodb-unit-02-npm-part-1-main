// mock version of the data (just putting empty arrays in)
const ingredients = {
  bread: [],
  cheese: [],
  condiments: []
}

// if you want to, you can get the right value with
ingredients.bread
// or
ingredients.condiments
// IF you know what key you're trying to access

// But here, we don't know the key in the code file. Which ingredietn category will be in `req.params.category`, because the client can ask for different ingredients every time.
app.get('/ingredients/:category', () => {
  // We can't do this:
  ingredients.req.params.category
  // Because the literal key "req.params.category" isn't a key in our ingredients object.
  // Nor can we do this:
  const category = req.params.category;
  ingredients.category
  // Because ingredients doesn't have a property called `category`, it has `bread` and `cheese` and `condiments`.

  // BUTt his will work!
  ingredients[req.params.category] //> same as ingredients.cheese or ingredients.bread or whateer the client put in that part of the url
  // The square brackets evaluates the value in it, and then accesses the object at whatever key that comes out to.
  // So if `req.params.category` is "cheese", then the above will be the same as accessing ingredients["cheese"], which is the same thing in JS as `ingredients.cheese`

  // You don't use bracket notation often, because dot notation (ingredients.cheese) is easier to write and read.

  // But if you don't know the key ahead of time, bracket notation is the only way to do it!
})