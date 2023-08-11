# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1).

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

## Overview

### The challenge

I should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](./intro-component-with-signup-form-master/images/desktop-screenshot.jpeg)
![](./intro-component-with-signup-form-master/images/mobile-screenshot.jpeg)

### Links

- Solution URL: [repositry site ](https://github.com/3omeed/intro-component-with-signup-form-master.git)
- Live Site URL: [live site URL ](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I have practiced more on the form validation, I learned to a validate email by (regEx)
this is first code to enter this

```
const validation = function () {
  const regEx = /^\S+@\S+\.\S+$/;
  if (regEx.test(inputEmail === true)) {
...
  } else {...}
  }
```

### Continued development

my code still not readable I think I can improve it by practising on it and use more advanced features like promises and classes
I also want to practise more on not to copy code

### Useful resources

- [W3Schools](https://www.w3schools.com/)
- [developer.mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

## Author

- Frontend Mentor - [@3omeed](https://www.frontendmentor.io/profile/3omeed)
- linkedin - [Abdelrahman Emad](https://www.linkedin.com/in/abdelrahman-emad-57bb10237/)
