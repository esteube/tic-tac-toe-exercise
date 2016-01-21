# Tic Tac Toe

For this assignment, you will be combining your knowledge of data types, functions, DOM manupulation and HTML/CSS to build Tic Tac Toe! If you are not familiar with the rules you can read about them [here](https://en.wikipedia.org/wiki/Tic-tac-toe)

## Getting Started

1. Create your `style.css` and `script.js` files which will contain the CSS and JS for your assignment. Make sure you have linked your CSS and JS to your HTML page.
2. Before you worry about any of the JavaScript, take a look at the HTML and add the necessary CSS to create the board
3. You should have 3x3 grid as well as a button that clears the board

## Game Logic

1. When the game starts, the first player should be able to click on any of the boxes and place an `X`.
2. After playing their move, the second player should be able to click on any of the non-selected boxes and place an `O`
3. Make sure that a player can not override another players move (you can not click on a box that has been clicked already)
4. Enable your button to reset the board when clicked 
5. Once you have this all working, figure out a way to determine if a player has won. There are many ways to do this, but before you start coding - take a step back and **THINK!**

## Getting the tests to pass

- Your goal with this assignment should be to get the tests to pass. Once you have the tests passing, feel free to create a new branch and add whatever styling/changes you would like. 

1. Make sure that you have a server running! The tests will not work unless the application is working. Either use your alias to start a server or type in the terminal (in the root of this application) `python -m SimpleHTTPServer 8080`.
2. Make sure you do remove ANY of the existing HTML.

## Bonus
* Only allow a user to have 5 seconds to go, otherwise they lose their turn!
* Have the option to play against the computer. Your AI can be very minimal, but it should be able to pick a box that has not been selected already.

## Super Bonus
* Once you have your AI working, write some code that will
  play a game of Tic Tac Toe against you. For a real challenge, research the minimax algorithm). Using this algorithm - you should **NEVER** be able to beat the computer. The best you can do is a tie.
