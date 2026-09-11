const classes = ["Early Stages 1", "Early Stages 2", "Early Stages 3", "Primary 1", "Primary 2", "Primary 3", "Primary 4", "Primary 5", "Primary 6"];
console.log(classes[0]); // Output: Early Stages 1
console.log(classes[3])

console.log(classes.length); // Output: 9
classes.push("Secondary 1"); // This will add "Secondary 1" to the end of the array
console.log(classes); // Output: ["Early Stages 1", "Early Stages 2", "Early Stages 3", "Primary 1", "Primary 2", "Primary 3", "Primary 4", "Primary 5", "Primary 6", "Secondary 1"]

classes.pop(); // This will remove the last element from the array
console.log(classes); // Output: ["Early Stages 1", "Early Stages 2", "Early Stages 3", "Primary 1", "Primary 2", "Primary 3", "Primary 4", "Primary 5", "Primary 6"]

classes.unshift("Primary 0"); // This will add "Primary 0" to the beginning of the array
console.log(classes); // Output: ["Primary 0", "Early Stages 1", "Early Stages 2", "Early Stages 3", "Primary 1", "Primary 2", "Primary 3", "Primary 4", "Primary 5", "Primary 6"]

classes.shift();
console.log(classes); // Output: ["Early Stages 1", "Early Stages 2", "Early Stages 3", "Primary 1", "Primary 2", "Primary 3", "Primary 4", "Primary 5", "Primary 6"]

console.log(classes.includes("Primary 3")); // Output: true
console.log(classes.includes("Secondary 2")); // Output: false

console.log(classes.indexOf("Primary 4")); // Output: 6
console.log(classes.indexOf("Secondary 2")); // Output: -1

classes[3] = "Primary 1A"; // This will change the value of the element at index 3 to "Primary 1A"
console.log(classes); // Output: ["Early Stages 1", "Early Stages 2", "Early Stages 3", "Primary 1A", "Primary 2", "Primary 3", "Primary 4", "Primary 5", "Primary 6"]

const primaryClasses = classes.slice(3, 9); // This will create a new array with the elements from index 3 to 8
console.log(primaryClasses); // Output: ["Primary 1A", "Primary 2", "Primary 3", "Primary 4", "Primary 5", "Primary 6"]

classes.splice(3, 3, "Primary 1B", "Primary 2B", "Primary 3B"); // This will remove 3 elements from index 3 and add "Primary 1B", "Primary 2B", "Primary 3B" in their place
console.log(classes); // Output: ["Early Stages 1", "Early Stages 2", "Early Stages 3", "Primary 1B", "Primary 2B", "Primary 3B", "Primary 4", "Primary 5", "Primary 6"]

console.log(classes.join(", ")); // Output: "Early Stages 1, Early Stages 2, Early Stages 3, Primary 1B, Primary 2B, Primary 3B, Primary 4, Primary 5, Primary 6"
