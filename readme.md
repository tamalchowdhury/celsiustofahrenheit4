# Celsius to Fahrenheit Converter Tool

This tool converts celsius to fahrenheit online.

You can see the live project here: https://tamalchowdhury.github.io/celsiustofahrenheit4/

<img src="/media/screenshot.png" alt="screenshot" />

This is how I created a function to convert the celsius to fahrenheit:

```js
function celsiusToFahrenheit(celsius) {
  let fahrenheit
  fahrenheit = (celsius * 9/5) + 32
  return fahrenheit
}
```