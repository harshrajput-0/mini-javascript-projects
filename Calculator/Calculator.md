# Calculator

A simple and responsive Calculator built using HTML, CSS, and JavaScript. The application performs basic arithmetic operations through an intuitive button-based interface and updates calculations in real time.

## Preview

The calculator supports:

* Addition
* Subtraction
* Multiplication
* Division
* Decimal numbers
* Clear all (AC)
* Delete last character (DEL)
* Expression evaluation

## Features

* Clean and responsive user interface
* Basic arithmetic operations
* Prevents multiple operators from being entered consecutively
* Delete the last entered character
* Clear the display instantly
* Responsive button layout
* Pure HTML, CSS, and JavaScript
* No external libraries required

## Project Structure

```text
calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

---

## How It Works

The calculator builds a mathematical expression as buttons are clicked.

* Number buttons append digits to the display.
* Operator buttons (`+`, `-`, `*`, `/`) replace the previous operator if one already exists.
* The **DEL** button removes the last character.
* The **AC** button clears the display.
* The **=** button evaluates the expression and displays the result.

### Operator Validation

Before adding an operator, the application checks the last entered character to avoid consecutive operators.

Example:

```javascript
if (b == '+' || b == '-' || b == '*' || b == '/') {
    // Replace previous operator
}
```

### Expression Evaluation

The calculator evaluates the expression using:

```javascript
display.value = eval(display.value);
```
---

## Screenshot

<p>
  <img src="preview/calculator1.png" width="250"/>
  <img src="preview/calculator2.png" width="250"/>
  <img src="preview/calculator3.png" width="250"/>
</p>
---

## Learning Concepts Covered

This project helps practice:

* DOM Manipulation
* Event Handling
* JavaScript Functions
* String Manipulation
* Conditional Logic
* CSS Flexbox
* Responsive Design

## Future Improvements

* Keyboard support
* Parentheses `(` `)`
* Percentage (`%`)
* Square root
* Scientific calculator functions
* Calculation history
* Dark and light themes
* Error handling for invalid expressions

## Browser Compatibility

Compatible with modern browsers:

* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Brave
* Opera
* Safari

## Known Limitations

* Uses JavaScript's `eval()` function to evaluate expressions. While acceptable for a learning project, `eval()` is generally discouraged in production applications due to security and maintainability concerns.
* Does not currently support advanced mathematical operations such as percentages, exponents, or parentheses.
* Keyboard input is not supported.

## License

This project is licensed under the MIT License.

## Author

Created by Harsh.

---

A beginner-friendly project for learning JavaScript event handling, DOM manipulation, and building interactive web applications.

