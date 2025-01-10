// 1. Write a function that takes degrees fahrenheit and returns the temperature in degrees celsius.

// You can convert degrees fahrenheit to degrees celsius by:
// 1. subtracting 32 from the degrees fahrenheit
// 2. multiplying the result by 5
// 3. dividing that result by 9

/**
 * fahrenheitToCelsius
 * -------------------
 * Converts degrees fahrenheit to celsius.
 * @param {number} degrees - The temperature in degrees fahrenheit.
 * @returns {number} - The temperature in degrees celsius.
 */
function fahrenheitToCelsius(degrees) {
    return (degrees - 32) * 5 / 9;
}


// 3. (Don't forget to do 2 at the bottom of the file first, and test it!) Write a function that takes degrees celsius and returns the temperature in degrees fahrenheit.

// You can convert degrees celsius to degrees fahrenheit by:
// 1. multiplying the degrees celsius by 9
// 2. dividing the result by 5
// 3. adding 32 to that result

/**
 * celsiusToFahrenheit
 * -------------------
 * Converts degrees celsius to fahrenheit.
 * @param {number} degrees - The temperature in degrees celsius.
 * @returns {number} - The temperature in degrees fahrenheit.
 */
// 'degrees' is localised to this function. Only local scope.
const celsiusToFahrenheit = (degrees) => {
    return degrees * 9 / 5 + 32;
}

// 5. (Don't forget to do 4 at the bottom of the file first and test it!) Write a function that takes a temperature and a scale (either "f" for fahrenheit or "c" for celsius) and returns the temperature in the other scale. As a bonus, use the functions you wrote above to do this.

/**
 * convertTemperature
 * -------------------
 * Converts degrees in the given scale to the other scale.
 * @param {number} degrees - The temperature.
 * @param {string} scale - The scale to convert from.
 * @returns {number || null} - The temperature in the other scale, or null if the scale is neither farenheit or celsius.
 */
const convertTemperature = function (degrees, scale) {
    if (scale === 'c') {
        return celsiusToFahrenheit(degrees);
    } else if (scale === 'f') {
        return fahrenheitToCelsius(degrees);
    } else {
        return null;
    }
}

// 2. Export the fahrenheitToCelsius function in an object so that it can be imported in other files. Then run the tests to make sure your function works.

// 4. Export the celsiusToFahrenheit function in the object at the bottom of the file. Then run the tests to make sure your function works.

// 6. Export the convertTemperature function in the object at the bottom of the file. Then run the tests to make sure your function works.

module.exports = {
    fahrenheitToCelsius,
    celsiusToFahrenheit,
    convertTemperature,
}