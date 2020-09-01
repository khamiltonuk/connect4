This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# Connect4

Connect4 is a grid-based game, where players take it in turns to add
tokens. The winner is whoever manages to line up 4 pieces, in any
direction, first. Diagonals are allowed.

https://en.wikipedia.org/wiki/Connect_Four

## Tasks

The aim is to develop an interactive version of the game which the
candidate and interviewer can play together.

A simple, text-based, representation of the grid is encouraged to
start with. For example, you might use '.' for empty slots, and 'x'
and 'o' for pieces of the two players. Players can input their turns
via the REPL.

A minimal version of the game should support:

- a 6 x 7 grid
- players play pieces sequentially
- the game identifies winning turns and ends at that point

## Bonus rounds

### Pop Out

In addition to the existing rules, players may 'pop' one of the pieces
out from the bottom of the board for their turn. All the pieces above
shift downwards. Victory conditions remain the same as before.

### 5-in-a-row

Instead of four pieces in a row for victory, 5 are now required! Adapt
the grid to be 6 x 9 to accommodate this.

### Power up

In addition to the usual pieces, players also receive specially marked
'Power Checkers' pieces. This can be played once per game. One example
of a 'Power Checker' is an Anvil - this removes all pieces below it
when played, leaving the Anvil at the bottom row of the board.

Implement the Anvil.

Invent your own 'Power Checker' and add it to the game!
