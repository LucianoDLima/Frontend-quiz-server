const { pool } = require('../models/database');

async function getThemes(res) {
  try {
    const result = await pool.query('SELECT * FROM themes');

    return res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
}

async function getQuestion(req, res) {
  const theme = req.params.theme;
  const questionId = req.params.questionId;

  try {
    // Fetch the questions based on the theme and id provided by the frontend
    const questionResult = await pool.query(`SELECT * FROM questions${theme} WHERE questionid = $1`, [questionId]);
    
    if (questionResult.rows.length === 0) {
      return res.status(404).send('Question not found');
    }

    const question = questionResult.rows[0];
    console.log(question);

    // Fetch choices for the specific question
    const choicesResult = await pool.query(`SELECT * FROM choices${theme} WHERE questionid = $1`, [questionId]);
    const choices = choicesResult.rows;
    console.log(choices);

    // Bind them together
    question.choices = choices;
    console.log(question);

    return res.json(question);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
}


module.exports = { getThemes, getQuestion };
