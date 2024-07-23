# Newsletter sign-up form with success message solution

This project was aimed at creating a newsletter signup with a success message page. During this project, I used ReactJS, TailwindCSS, Vite and CSS. I worked through each step of the process to build my application. 

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

Desktop:

![Desktop Landing Page](./src/assets/DesktopLandingPage.png)

![Desktop Subscribing Page](./src/assets/ThankYouSubscribingDesktop.png)

![Desktop Valid Email Not Accepted](./src/assets/ValidEmailRequiredDesktop.png)

Mobile:

![Mobile Landing Page ](./src/assets/PhoneLandingPage.png)

![Mobile Subscribing Page ](./src/assets/ThankYouSubscribingMobile.png)

![Mobile Email Required ](./src/assets/ValidEmailRequiredMobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Netlify Solution](https://newsletter-signup-lav.netlify.app/)

## My process

This project required organization, layout design, and an understanding of JavaScript principles. My project process began with the desktop styling, establishing a  foundation to build upon. After, I started working on the form submission, a task that was more challenging than anticipated. Through this process, I learned about email validation, form input validation, and navigation with React Router's useNavigate. Next, I worked on the creation of a new component for the 'Thank You for Subscribing' page. Once the functionality was in place, I tailored the styling for both mobile and desktop interfaces. In the final phase, I reviewed the code to solidify my understanding and updated the README accordingly. This project served as an excellent practice ground for honing my skills in TailwindCSS, ReactJS, and routing.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Throughout the development of this application, I gained valuable insights and learned several key concepts:

***React Router Dom:*** This npm package uses dynamic routing in web applications, ideal for creating single-page applications (SPAs) where content is dynamically loaded based on the URL. Its benefits include enhanced speed and performance. The Router component acts as a container for all other components, while Routes define the navigation paths within an SPA. The Route component checks the current URL and renders the corresponding component, and Link is used for creating navigable links to different paths.

***Email Validation:*** I implemented a validateEmail function that accepts an email address as its argument. This function uses validate.test(email), where validate is a regular expression that matches the basic structure of an email address, to determine if the provided email matches the expected pattern. It returns true if the match is successful, and false otherwise.

***handleSubmit Function:*** This function is designed to process user input. It prevents the default page reload, validates the email address, and provides an appropriate response based on the input. If the validation checks are passed, it navigates the user to a thank you page.

***Refactoring Code for Success Variable:*** During a review of my code, I noticed that I had included a success variable for conditional rendering, which ultimately was unnecessary. Initially, setting this variable to true would conditionally render a "Thank you for subscribing!" message. However, after integrating a dedicated thank you component page that appears upon submitting a valid email, I found the success variable and its associated code redundant. Removing this extraneous code streamlined the program's functionality.


### Useful resources

- [Google Font Roboto](https://fonts.google.com/specimen/Roboto) - Design required Google Font Roboto
- [TailwindCSS Button Styling] (https://v1.tailwindcss.com/components/buttons) - Resource for button styling
- [Frontend Newsletter Reference] (https://github.com/roidzuh/frontend-mentor/tree/main/newsletter-sign-up-form)
- [React Router Dom] (https://www.geeksforgeeks.org/what-is-react-router-dom/)

## Author

- Website - [Laura V](www.lauradeveloper.com)
- Frontend Mentor - [@lavollmer](https://www.frontendmentor.io/profile/yourusername)
- Github - [@lavollmer](https://github.com/lavollmer)
