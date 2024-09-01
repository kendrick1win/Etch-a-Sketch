// script.js

// Select the container and button elements
const container = document.getElementById('grid-container');
const button = document.getElementById('resize-button');

// Constants for total space
const totalSpaceWidth = 500; // Total width of the grid
const totalSpaceHeight = 500; // Total height of the grid

// Function to create a grid
function createGrid(size) {
    // Clear existing grid
    container.innerHTML = '';

    // Calculate dimensions of each square
    const squareSize = totalSpaceWidth / size;

    // Set the dimensions of the container
    container.style.width = `${totalSpaceWidth}px`;
    container.style.height = `${totalSpaceHeight}px`;

    // Create grid squares
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.className = 'grid-square';
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        container.appendChild(div);

        // add event listener for hover
        div.addEventListener('mouseover', () => {
        div.classList.add('hovered');
    })
    }

    
}

// Initialize grid with a default size
createGrid(16);

// Add event listener to the button
button.addEventListener('click', () => {
    // Prompt user for grid size
    const userInput = prompt('Enter the number of squares per side (max 100):');
    const newSize = parseInt(userInput, 10);

    if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
        // Create a new grid with the specified size
        createGrid(newSize);
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }
});

