# Random Number Generator

A tiny browser game where you guess a number from 1 to 10 and see if you matched the app's random pick.

## What It Does

- Lets the player enter a number between 1 and 10
- Checks that the input is valid
- Picks a random number with JavaScript
- Shows a success or try-again message after each guess

## Project Files

- `index-1.html` - the page layout
- `styles.css` - the page styling
- `script.js` - the game logic
- `WebBackground.png` - image asset included in the project

## How To Run It

This project is just HTML, CSS, and JavaScript, so there is no install step.

1. Open `index-1.html` in your browser.
2. Enter a number from 1 to 10.
3. Click `Guess` to play.

## Notes

Right now, `index-1.html` points to CSS and JS files inside an `assets/` folder, but the project files are stored in the root folder instead. If the page does not load styles or game behavior correctly, update those file paths in `index-1.html` to match the current structure.

## Future Ideas

- Add a score counter
- Track how many guesses the player has made
- Let the player keep playing without reloading
- Add a nicer background using `WebBackground.png`
