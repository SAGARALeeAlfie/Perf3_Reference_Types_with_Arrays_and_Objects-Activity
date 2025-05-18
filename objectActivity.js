// Create an object called car with the properties type, model, and color
const car = {
  type: "Honda",
  model: "Civic",
  color: "Blue"
};

// Use typeof to check the type of the object and log it to the console
console.log("Type of car:", typeof car); // Should log "object"

// Update the type property to "Toyota" and log the updated object
car.type = "Toyota";
console.log("Updated car type:", car);

// Add a new property wheels with the value 4 and log the updated object
car.wheels = 4;
console.log("Car with wheels added:", car);
