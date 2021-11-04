<div align="center">

![](https://img.shields.io/github/last-commit/arthurfincham/github-frontend-api)
![](https://img.shields.io/github/languages/count/arthurfincham/github-frontend-api)
![](https://img.shields.io/github/languages/code-size/arthurfincham/github-frontend-api)


## [Dev Licence](https://git-card.herokuapp.com/)

<img src="public/css/images/preview.gif" width="400px">

</div>

## Tools

* [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make the API call and get information about the GitHub user.
* Used CSS from [this codepen](https://codepen.io/veronicadev/pen/VXqZgR) by [@veronicadev](https://github.com/veronicadev) for the flipping card. Thank you Veronica!
* [Animate.css](https://animate.style/) for further animation.
* [Express.js](https://expressjs.com/) for my web framework.
* [Heroku](https://dashboard.heroku.com/) for deployment.


## Install

```bash
% git clone https://github.com/arthurfincham/github-frontend-api
```
```bash
% cd github-frontend-api
```
```bash
% npm install // install dependencies
```
```bash
% node app.js
```


## Assignment

* Build a web page that requests data from an API and update its contents.

In this exercise, we'll use the Github API to build our own "frontend" user interface to display information on Github repositories and users. 

You'll have to:
 * use `fetch` to request data from Github
 * use DOM functions to manipulate the page
 * use event listeners to respond to user interaction

 This one is left to you! You should build a similar page, but this time to display some information about a user rather than a repository. Ever wanted to customise the appearance of your profile on Github? This is the chance to build a complete personalised page for your Github info!

The API URL to request your (public) profile info is:
```
https://api.github.com/users/{your username}
```

You're free to design the page how you want it, make sure that it includes at least:
 * your username
 * your bio
 * your profile picture
 * the number of repos and followers