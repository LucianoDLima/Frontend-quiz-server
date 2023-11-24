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
**Endpoint:** /question/:theme/:questionId

**Method:** GET

**Description:** Fetch a question and its choices based on the theme and id provided

### Correct answer
**Endpoint:** /answer/:theme/:questionId

**method:** GET

**Description:** Fetch the correct answer based on the theme and questionid provided


## Resources used
- [Connect node.js to elephantsql](https://katydonoghue.medium.com/setting-up-a-node-express-application-with-a-postgres-database-using-elephantsql-postico-93b728e51f09)

- [How to remove a property from an object](https://futurestud.io/tutorials/how-to-delete-a-key-from-an-object-in-javascript-or-node-js#:~:text=Use%20Destructuring%20to%20Delete%20a,want%20in%20the%20new%20one.)
