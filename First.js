let result = document.getElementById("result");

// Append value to the screen
function appendValue(value) {
  result.value += value;
}

// Clear the screen
function clearScreen() {
  result.value = "";
}

// Calculate the result
function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    alert("Invalid Input!");
  }
}
