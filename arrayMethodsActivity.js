// Use concat() to join two arrays
const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const combinedArr = arr1.concat(arr2);
console.log("Concatenated array:", combinedArr);

// Use push() to add an element "Kiwi" to the array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("After push:", fruits);

// Use unshift() to add two numbers 4 and 5 to the beginning of the array
const array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("After unshift:", array1);

// Use pop() to remove the last element from the fruits array
fruits.pop();
console.log("After pop:", fruits);

// Use shift() to remove the first element from the array
const array2 = [1, 2, 3];
array2.shift();
console.log("After shift:", array2);

// Use sort() to sort the fruits array alphabetically
fruits.sort();
console.log("After sort:", fruits);

// Use slice() to create a new array from a portion of the fruits array
const slicedFruits = fruits.slice(1, 3); // from index 1 to 2 (not including 3)
console.log("Sliced fruits:", slicedFruits);

// Use splice() to insert and remove elements in the months array
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb"); // insert "Feb" at index 1
console.log("After inserting Feb:", months);
months.splice(4, 1, "May"); // replace "June" with "May"
console.log("After replacing June with May:", months);
