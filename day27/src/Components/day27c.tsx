// Define a function that logs all properties and values of an object
function logObjectProperties(obj: { [key: string]: any }) {
    for (let property in obj) {
        // Check if the property is own property of the object (not inherited)
        if (obj.hasOwnProperty(property)) {
            // Log the property name and its value
            console.log(`${property}: ${obj[property]}`);
        }
    }
}

// Example usage with a car object
logObjectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
