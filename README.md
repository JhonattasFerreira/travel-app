# A Simple Travel App

An app that based on the city and the day, informs the user the temperature forecast, as well as city information and a photo of the place.

## Getting Started

These instructions will provide a copy of the app running on your local machine for development and testing.

### Prerequisites

You will need to create some accounts to access the api key. Are they:

  - [Geonames](http://www.geonames.org/export/web-services.html)
  - [Weatherbit](https://www.weatherbit.io/account/create)
  - [Pixabay](https://pixabay.com/api/docs/)

### Installing

Step 1: Create your account on [Geonames](http://www.geonames.org/export/web-services.html), [Weatherbit](https://www.weatherbit.io/account/create), [Pixabay](https://pixabay.com/api/docs/)

Step 2: Install the dependencies.

    npm install

Step 3: Create a file called .env at the root of the application and create some variables called: API_KEY_GEONAMES, API_KEY_WEATHERBIT, API_KEY_PIXABAY. Set your keys in these variables.

    API_KEY_GEONAMES=<<YOUR_KEY>>
    API_KEY_WEATHERBIT=<<YOUR_KEY>>
    API_KEY_PIXABAY=<<YOUR_KEY>>

Step 4: Create your local bundle

    npm run build-prod

Step 5: Runs the server

    npm run start

## Running the tests

I used jest to do the tests. To run the tests just use the command `npm run test`

## Built With

  - [webpack](https://webpack.js.org/)
  - [Sass](https://sass-lang.com/)
  - [Express](https://expressjs)
  - [Jest](https://jestjs.io/)
  - [Geonames](http://www.geonames.org/export/web-services.html)
  - [Weatherbit](https://www.weatherbit.io/account/create)
  - [Pixabay](https://pixabay.com/api/docs/)