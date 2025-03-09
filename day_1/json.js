// Create a JSON object for the weather forecast
const weatherForecast = {
    date: "2025-03-02",
    temperature: {
        morning: "18°C",
        afternoon: "25°C",
        evening: "20°C"
    },
    conditions: "Partly Cloudy",
    humidity: "65%"
};

// Display the weather forecast in the console
console.log("Weather Forecast:");
console.log("Date", weatherForecast.date);
console.log(`Morning Temperature: ${weatherForecast.temperature.morning}`);
console.log(`Afternoon Temperature: ${weatherForecast.temperature.afternoon}`);
console.log(`Evening Temperature: ${weatherForecast.temperature.evening}`);
console.log(`Conditions: ${weatherForecast.conditions}`);
console.log(`Humidity: ${weatherForecast.humidity}`);
