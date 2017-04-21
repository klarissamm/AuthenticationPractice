# AuthenticationPractice - in 2 hours

I used Express and Mongoose on the back-end, with a package called 'Validator' which adds more validations to Mongoose.
I also used the JSON Web Token package for creating web tokens and the Express-JWT package, a package that contains middleware to authenticate users that are using a JWT. These allow me to send a JWT token when a user registers or logs in, to use middleware to then check for the token and, finally, to create an error handler for when there isn't a token, so that access can be denied if necessary.

On the client side, I used local storage to store the JWTs and made a single-page application using AJAX. I used jQuery because I first learned the authentication process using this library (and then updated this learning with Angular later on). I like jQuery because it's simple to use and makes appending html and interacting with the DOM straight-forward. For register and login, I appended a form to the main and then created an AJAX request for when the form has been submitted so that I could POST the data to the api. I used event delegation to deal with the fact that the form is dynamically created.

I used Bootstrap in order to pinch their pre-made forms for Register and Login (as well as the navbar). Although they are not the most beautiful - and usually I would spend some time making them look very different to this - they were efficiently made! In terms of the design of the page at the moment, it does not have the best colour scheme (!) but I just wanted to get some colour on the page to brighten it up and at least change the very bootstrap-y features.

The landing page (usersIndex) currently displays all the users, with their usernames. The email address currently says 'undefined' and this is something I will fix. At the moment, the backend is set up with the routes for updating email and password, and I will update this on the front-end with more time. The session is secure and maintains the logged in state after refreshing the page. Hopefully it looks neat, though not beautiful yet! 
