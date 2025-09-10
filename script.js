/* ========================
   Part 2: JavaScript Functions
   - Parameters, Return Values, Scope
======================== */

// Global variable to track animations
let animationCount = 0;

// Function with parameter + return value
function doubleNumber(num) {
  return num * 2;
}

// Function demonstrating local scope
function logScopeExample() {
  let localMessage = "I'm local to this function!";
  console.log(localMessage); // ✅ Accessible here
  // console.log(globalMessage); ❌ Would throw error
}

// Example usage
console.log("Double 5:", doubleNumber(5));
logScopeExample();

/* ========================
   Part 3: CSS + JS Integration
   - Trigger animations by adding/removing classes
======================== */

// Animate box movement/rotation on button click
const box = document.getElementById("box");
document.getElementById("animateBtn").addEventListener("click", () => {
  box.classList.toggle("box-move"); // Toggle CSS class
  animationCount++; // Update global variable
  console.log(`Box animation triggered ${animationCount} times.`);
});

// Modal logic: show/hide with animations
const modal = document.getElementById("modal");
const openBtn = document.getElementById("modalBtn");
const closeBtn = document.getElementById("closeModal");

// Open modal: fade in + slide down
openBtn.addEventListener("click", () => {
  modal.classList.add("show");
  modal.classList.remove("hidden");
});

// Close modal: fade out then hide
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => modal.classList.add("hidden"), 500); // Matches CSS transition
});
