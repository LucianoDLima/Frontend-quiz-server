const express = require('express');
const cors = require('cors');
const { getThemes, getQuestion, getAnswer } = require('./controller/controller');

const PORT = 3000;
const app = express();

app.use(cors());

app.get('/themes', async (req, res) => {
  await getThemes(res);
});

app.get('/question/:theme/:questionId', getQuestion);

app.get('/answer/:theme/:questionId', getAnswer);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
