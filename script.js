// take celsius and convert to fahrenheit
function celsiusToFahrenheit(celsius) {
  let fahrenheit
  fahrenheit = (celsius * 9/5) + 32
  return fahrenheit
}

// display the fahrenheit on page
function displayFahrenheit(fahrenheit) {
  const farSpan = document.querySelector("#far")
  farSpan.textContent = fahrenheit
}

function handleFormSubmit(event) {
  event.preventDefault()
  let celsius = event.target.celsius.value 
  
  if(celsius) {
    let fahrenheit = celsiusToFahrenheit(celsius)
    displayFahrenheit(fahrenheit)
  }

}

const form = document.querySelector("#form")

form.addEventListener("submit", handleFormSubmit)