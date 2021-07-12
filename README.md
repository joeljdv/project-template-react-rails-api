# Rails project

## Dream Garage

In this repository you can find the back-end and front-end to an app where the user can log-in or sign-up, then the user can add cars with a form and render a list of the cars which can be clicked to and will render a page where the user can see the name, make, year and image of the car.

 In order to use this app, fork and clone this repository to your computer. Once cloned, cd to the directory and run:

### `bundle install`
### `npm install --prefix client`
### `rails s`

On another terminal cd to the same directory and run:

### `npm start --prefix client`

When the app opens on the browser, the user will see a home page where there are two buttons, 'Signup' and 'Login'. If the user presses Signup a sighup form will render and the user needs to fill up the username field, which needs to be unique, and password and password confirmation which must match. If the information is valid the user will automatically sign in and two buttons will render, a Logout button and a 'cars' button that when clicked renders the list of cars the user has added and an "add car" button to add a new car.

When the list of car renders, the user can click on any of the cars and the app will render a picture of the car the user has added, the name, the make, and the year; It will also render an 'edit car' button which will render a form to edit that specific car.