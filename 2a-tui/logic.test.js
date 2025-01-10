let {
    fahrenheitToCelsius,
    celsiusToFahrenheit,
    convertTemperature,
} = require("./logic");

if (typeof fahrenheitToCelsius !== "function") {
    fahrenheitToCelsius = () => {};
}

if (typeof celsiusToFahrenheit !== "function") {
    celsiusToFahrenheit = () => {};
}

if (typeof convertTemperature !== "function") {
    convertTemperature = () => {};
}


describe("fahrenheitToCelsius", () => {
    it("should convert 32 degrees fahrenheit to 0 degrees celsius", () => {
        expect(fahrenheitToCelsius(32)).toBe(0);
    });

    it("should convert 212 degrees fahrenheit to 100 degrees celsius", () => {
        expect(fahrenheitToCelsius(212)).toBe(100);
    })

    it("should convert 50 degrees fahrenheit to 10 degrees celsuis", () => {
        expect(fahrenheitToCelsius(212)).toBe(100);
    });
});

describe("celsiusToFahrenheit", () => {
    it("should convert 0 degrees celsius to 32 degrees fahrenheit", () => {
        expect(celsiusToFahrenheit(0)).toBe(32);
    });

    it("should convert 100 degrees celsius to 212 degrees fahrenheit", () => {
        expect(celsiusToFahrenheit(100)).toBe(212);
    });

    it("should convert 10 degrees celsius to 50 degrees fahrenheit", () => {
        expect(celsiusToFahrenheit(10)).toBe(50);
    });
});

describe("convertTemperature", () => {
    it("should convert 32 degrees fahrenheit to 0 degrees celsius", () => {
        expect(convertTemperature(32, "f")).toBe(0);
    });

    it("should convert 212 degrees fahrenheit to 100 degrees celsius", () => {
        expect(convertTemperature(212, "f")).toBe(100);
    });

    it("should convert 0 degrees celsius to 32 degrees fahrenheit", () => {
        expect(convertTemperature(0, "c")).toBe(32);
    });

    it("should convert 100 degrees celsius to 212 degrees fahrenheit", () => {
        expect(convertTemperature(100, "c")).toBe(212);
    });

    it("should return null if the scale is not 'f' or 'c'", () => {
        expect(convertTemperature(100, "x")).toBe(null);
    });
})
