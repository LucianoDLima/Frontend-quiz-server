const express = require('express');
const cors = require('cors');
const { getThemes } = require('./controller/controller');
const { getQuestion } = require('./controller/controller');

const PORT = 3000;
const app = express();

app.use(cors());

app.get('/themes', async (req, res) => {
  await getThemes(res);
});

app.get('/questions/:theme/:questionId', getQuestion);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
