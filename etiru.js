// Assuming these variables are defined elsewhere in your code
const value = ...; // Some value to check
const property = 'color'; // Example property
const legend = ...; // Legend configuration or data
const channel = 'x'; // Example channel

// Assuming model is an object with a method fieldDef
const model = {
    fieldDef: function(channel) {
        // Return field definition based on the channel
        return { field: 'someField', type: 'quantitative' };
    }
};

// Calling the function isExplicit$1 with the arguments
const explicit = isExplicit$1(value, property, legend, model.fieldDef(channel));

// Now you can use the result of the function call
if (explicit) {
    console.log("The property is explicitly defined.");
} else {
    console.log("The property is not explicitly defined.");
}
