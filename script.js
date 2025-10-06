// Demo data array we will use in all examples
const foods = ['Pizza', 'Tacos', 'Ice Cream', 'Burgers', 'Pasta']

// helper function: will display whatever HTML/text we pass into the #out div
function render(html) {
  document.getElementById('out').innerHTML = html
}

/* 
  1) listFoods()
     - Use a for...of loop
     - Output all foods into the #out div (as <p> tags or list items)
*/
function listFoods() {
  // code goes here
  let output = ''
  for (const food of foods) {
    output += `<p>${food}</p>`
  }

  render(output)

}

/* 
  2) numberedFoods()
     - Use a classic for loop with index
     - Output foods as an ordered list (<ol><li>...</li></ol>)
*/
function numberedFoods() {
  // code goes here
  let output = `<ol class = "list-group list-group-numbered">`
  for (let i = 0; i < foods.length; i++) {
    output += `<li class="list-group-item"> ${foods[i]}</li>`
  }
  output += `</ol>`
  render(output)
}

/* 
  3) filterFoods()
     - Prompt the user for a letter
     - Loop through foods
     - Only show foods that start with that letter
     - If no matches, display a "not found" message
*/
function filterFoods() {
  // code goes here
  const letter = prompt('Pick a letter to filter the list by:')
  if (!letter) {
    render(`<p class="text-muted m-0"> No letter entered.</p>`)
    return
  }

  const lower = letter.toLowerCase()
  const matches = foods.filter(f => f.toLowerCase().startsWith(lower))

  const list = matches.map(item => `<li class = "list-group-item">${item}</li>`).join('')

  if (matches.length = 0) {
    render(`<p class="m=0">No foods found starting with '<strong>${letter}</strong>'</p>`)
  }
  render(`<ul class="list-group">${matches}</ul>`)
}

/* 
  4) forEachFoods()
     - Use foods.forEach()
     - Output each food as a Bootstrap card
     - Cards should be placed in a centered row
*/
function forEachFoods() {
  // code goes here
  
}

// ---- Event listeners (buttons) ----
document.getElementById('btnList').addEventListener('click', listFoods)
document.getElementById('btnNums').addEventListener('click', numberedFoods)
document.getElementById('btnFilter').addEventListener('click', filterFoods)
document.getElementById('btnForEach').addEventListener('click', forEachFoods)

//  ---------------STUDENT WORK SECTION--------------

/* 
  Task 1 — Uppercase List
  -----------------------
  - Use .map() to create a new array with all foods in uppercase
  - Display the results as an unordered list (<ul>)
*/

  function uppercaseList() {
    //TODO: Write your code here
  const upperFoods = foods.map(f => f.toUpperCase())
  let output = '<ul>'
  for (const food of upperFoods) {
    output += `<li>${food}</li>`
  }
  output += '</ul>'
  render(output)
}


/* 
  Task 2 — Reverse List
  ---------------------
  - Show the foods array in reverse order
  - You may use a backwards loop OR the built-in .reverse()
*/
function reverseList() {
  // TODO: Write your code here
    let output = '<ul>'
  for (let i = foods.length - 1; i >= 0; i--) {
    output += `<li>${foods[i]}</li>`
  }
  output += '</ul>'
  render(output)
}

/* 
  Task 3 — Random Food Picker
  ---------------------------
  - Use Math.random to pick a random food from the array
  - Display it in a Bootstrap card with a heading like "Today's Pick"
*/
function randomFoodPicker() {
  // TODO: Write your code here
    const randomIndex = Math.floor(Math.random() * foods.length)
  const randomFood = foods[randomIndex]
  const output = `
    <div class="card text-center p-3">
      <h5 class="card-title">Today's Pick</h5>
      <p class="card-text fs-4">${randomFood}</p>
    </div>
  `
  render(output)
}

/* 
  Task 4 — Word Lengths
  ---------------------
  - Loop through each food in the array
  - Count the number of characters in each one
  - Display results in the format: Food — X letters
*/
function wordLengths() {
  // TODO: Write your code here
   let output = '<ul>'
  for (const food of foods) {
    output += `<li>${food} — ${food.length} letters</li>`
  }
  output += '</ul>'
  render(output)
}

// ---- Event listeners for the new buttons ----
// (Make sure to add matching buttons in index.html)
document.getElementById('btnUppercase').addEventListener('click', uppercaseList)
document.getElementById('btnReverse').addEventListener('click', reverseList)
document.getElementById('btnRandom').addEventListener('click', randomFoodPicker)
document.getElementById('btnLengths').addEventListener('click', wordLengths)
