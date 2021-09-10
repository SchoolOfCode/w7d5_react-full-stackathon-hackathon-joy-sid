# Plan

## MVP

Using the cats picture API, bring in a random cat picture and breed and display.
Using the cocktails API, bring in a random cocktail, display picture and cocktail name.
Button to bring new cat which triggers a new cocktail.

cat image API needs an API key in the header, second parameter of a fetch.

## Beyond MVP

- Random name generator to name the cat
  Have a string that says '[Random name], the [cat breed] cat likes [cocktail name]'

- What the cat likes is used to search the cocktails API for an appropriate cocktail.

- Router to another URL with more cocktail details e.g ingredients and instructions.

### State and Component plan for MVP

- State: for cat info with image and breed
  catInfo, will hold an object with an image URL and the cat breed name as a string and an id
  useEffect that gets a new cat when the button is called. Starting state has an id.
  useEffect to update the state with specific key-value pairs of the returned JSON from the cats API

- State: for cocktail info with picture and name
  cocktailInfo, will hold an object with an image URL and the cocktail name
  useEffect that gets a new cocktail ONLY when catInfo changes

- Component: to display a picture with some text below it
  This will be used by both the cat and the cocktail
  Rendering the image and an h3 tag with the text from the appropriate state.

- Component: button that when clicked will update the cat state with a new cat, which triggers a new cocktail
  Needs to used event.preventDefault() in the onClick function to ensure it doesn't keep refreshing.
  Rendering a button that takes in the onClick function.
