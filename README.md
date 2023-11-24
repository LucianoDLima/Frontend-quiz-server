# Overview
This Node.js server is designed to fetch data from a postgresql database being hosted in elephantsql. 

This is for a project made by [frontendmentor](https://www.frontendmentor.io/challenges/frontend-quiz-app-BE7xkzXQnU), where they provide you with a design and you have to replicate it. I decided to try and do a fullstack version to challenge myself.

I still haven't touched the frontend, but it will be linked here after I start.

## Endpoints
### Themes
**Endpoint:** /themes

**Method:** GET

**Description:** Fetch the themes of the application

### Questions
**Endpoint:** /questions/:theme/:questionId

**Method:** GET

**Description:** Fetch a question and its choices based on the theme and id provided
