# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

This challenge was supposed to be entirely in Webflow. However, testing JavaScript became too time consuming. Instead, I decided to export the visuals and do the JS by hand. While there was a learnging curve to working around WISIWIG code, webflows is relatively clean, and I could work around it anyways. Overall, this challenge took me about 14 hours. A large chunk of said time went into tessting different methods of making sure each item worked, and making sure there were no issues with allowing users to use their keyboard as well as the on screen buttons.

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size (Super easy, barely an inconvenience)
- Perform mathematical operations like addition, subtraction, multiplication, and division (a refresher was needed, and this was a good one... until I realized the easy solution)
- Adjust the color theme based on their preference (the real challenge, hardest part of which was likely the slider bar. It took some really clever handiwork to figure that one out)
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser ~~I'll have to come back to this. I'm not sure how to use cookies, let alone achieve this without the use of them like I initially wanted~~ This was actually super easy, barely an inconvenience. LocalStorage saves right to the browser, and you can get the stored variable with localstorage.variableNameHere

### Screenshot

![screenshot of my finished calculator project](./images/Screenshot%202022-09-14%20at%2012-18-51%20Testing%20tutorials.png)

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

I used WebFlow to make the skeleton. My plan was to do it the entire time, but found hand-coding was going to be the better option for virtually all of the JavaScript, and made the CSS easier to keep clean as well. I used a CSS grid for the buttons, and flexbox to center all the buttons, as well as space the numbers over the "theme" line properly. Adding WebFlow to the easy stuff shaved a large chunk of time, but they made script editing virtually impossible, so I had no choice but to export and finish it by hand.

Next, I decided to add the calculator functionality. It was a matter of having a listener on the buttons that pushed the input based on the innerHTML, and when = was pressed, simply using the evaluate function to do the math for me. I ran a few tests to check for errors, fixed them, and continued on. It was mostly checking for things that would break evaluate functionality, as that allows it to do more advanced problems without spending time on the calculation part of the project.

I finished on the theme part. For the most part, this was super easy, barely an inconvenience. All I had to do was assign everything a color 1, color 2, and color 3 via CSS variables. Then, using JavaScript, I simply changed the number based on the theme range slider value. The hardest part was recoloring the slider itself. You can't change the colors with native CSS or JavaScript, you have to use pseudo-elements. The background color was cooperative in JS as the pseudo elements weren't needed, but it was tricky to change up the slider icon. I had to put a style tag within the page itself, and change the innerHTML of that to the CSS I wanted to add.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

While WebFlow likely saved me hours of testing for design, and made a lot of challenging things easier, most JS, if not all, is better done by hand. Each tool has a purpose, and it's good to know where it succeeds and where it fails.

Theme toggles actually aren't that hard to make. While they don't need to be a standard practice, any site intended for long term use could benefit form them so everybody can pick a style they enjoy.

Calculator apps aren't as easy to make as they seem. Breaking them by accident is quite easy, and preventing it will require a lot of watching over what's going on.

I should probably learn a JS library. React was popular, but I got confused by it. Everybody tells me they make life easier. I don't buy it, but I'll give it another go.

### Continued development

The main thing I need to learn is how to make it so the theme stays when you return to the page. Other calculator functions would be nice as well. Specifically, simplifying my code so you can reuse it easily would be nice; I feel like there were too many if/else statements I couldn't find a replacement too (I think a switch would work for the input check, but it got messy too quickly.)

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Roger Grijalva](https://www.rogergrijalva.com)
- Frontend Mentor - [@rpgrijalva](https://www.frontendmentor.io/profile/rpgrijalva)
