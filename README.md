# MovieSearchGoogleMaps [![Build Status](https://travis-ci.org/anil26/MovieSearchGoogleMaps.svg?branch=master)](https://travis-ci.org/anil26/MovieSearchGoogleMaps)
 
This project makes use of google map API and SF Open data API for showing the location of movies shot in los angeles

Technologies used in this project are :

1.React

2.Redux

3.Webpack

4.Minimal level of bootstrap.

5.Google MAp Apis.

6.SF data Apis.

ES6 is the version of ecmascript.


Steps to run the project :

1.Clone the project or download it.

2.run npm install.

3.run npm start.
4.Once the server is up .Hit http://localhost:3000/searchmovies


For changing the port fo the application,edit APP_PORT filed in ./config file in project foler

Note:SF data Api provides list of locations which has no valid geo coding(no latitude and longitude).SO for those points no plotting is done.

ScreenShot1
<img src = "https://github.com/anil26/MovieSearchGoogleMaps/blob/master/moviesearch1.png"/>

