// Variables
const cursor = document.getElementById('cursor');

let cursorX = 0, cursorY = 0;


// Function to move custom cursor
const moveCursor = (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
    cursor.style.top = `${cursorY}px`;
    cursor.style.left = `${cursorX}px`;
};

// Add event listener for mouse move
document.addEventListener('mousemove', (e) => {
    moveCursor(e);
});
