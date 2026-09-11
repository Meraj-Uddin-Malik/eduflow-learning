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