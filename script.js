// Select the container element
const container = document.getElementById('container');

// Define the number of rows and columns
const rows = 16;
const cols = 16;

// Create the grid
for (let i = 0; i < rows * cols; i++) {
    // Create a new div element
    const square = document.createElement('div');
    // Add a class to the square
    square.classList.add('square');
    // Append the square to the container
    container.appendChild(square);
}
