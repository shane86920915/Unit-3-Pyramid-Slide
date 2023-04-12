// Get the HTML elements that will be used in the script
const brickOption = document.getElementById('dropdown');
const slide = document.getElementById('height');
const button = document.querySelector('.btn');
const output = document.getElementById('value');
const pyramid = document.getElementById('pyramid');

// Set the initial value of the output element to be equal to the value of the slider
output.innerHTML = slide.value;

// Update the output element as the slider value changes
slide.oninput = function(){
  output.innerHTML = this.value;
}

// Change the background color of the slider as the slider value changes
slide.addEventListener("mousemove", function(){
  const x = slide.value;
  const color = `linear-gradient(90deg, rgb(118, 252, 117) ${x * 10}%, rgb(214, 214, 224) ${x}% )`;
  slide.style.background = color;
})

// Function to get the selected brick option from the dropdown menu
function changeBrick(){
  const menu = document.getElementById('dropdown').value
  return menu;
}

// Update the pyramid when the slider value changes
slide.addEventListener('input', () => {
  const height = document.getElementById('height').value
  printPyramid(height);
})

// Function to create the pyramid and append it to the DOM
function printPyramid(height) {
  // Clear the pyramid element before generating a new pyramid
  pyramid.innerHTML = "";

  // Create the pyramid string using nested loops
  let str;
  let para;
  for (let i = 0; i < height; i++) {
    str = "";
    for (let j = 0; j < height - i; j++) {
      str += "&nbsp;";
    }
    for (let k = 0; k <= i + 1; k++) {
      str += changeBrick();
    }
    para = document.createElement("p");
    para.innerHTML = str;
    pyramid.append(para);
  }
  return str;
}






