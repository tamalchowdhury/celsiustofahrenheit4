/**
 * this function takes celsius and converts to fahrenheit
 * @param {number} celsius 
 * @returns {number} fahrenheit
 */
function celsiusToFahrenheit(celsius) {
  let fahrenheit
  fahrenheit = (celsius * 9/5) + 32
  return fahrenheit
}

/**
 * displays the fahrenheit on page
 * @param {number} fahrenheit 
 * @returns {void}
 */
function displayFahrenheit(fahrenheit) {
  const farSpan = document.querySelector("#far")
  farSpan.textContent = fahrenheit
}

/**
 * utility function to handle form submit
 * @param {Event} event 
 * @returns {void}
 */
function handleFormSubmit(event) {
  event.preventDefault()
  let celsius = event.target.celsius.value 
  
  if(celsius) {
    let fahrenheit = celsiusToFahrenheit(celsius)
    displayFahrenheit(fahrenheit)
  }

}

/**
 * @type {Element} form
 */
const form = document.querySelector("#form")

form.addEventListener("submit", handleFormSubmit)