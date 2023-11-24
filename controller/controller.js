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

    // Fetch choices for the specific question
    const choicesResult = await pool.query(`SELECT * FROM choices${theme} WHERE questionid = $1`, [questionId]);
    const choices = choicesResult.rows;

    // Remove the correct answer from the returned object
    const removedAnswer = choices.map(({iscorrect, ...rest}) => rest)
    // Bind the questions and choices, without the correct answer
    question.choices = removedAnswer
    
  
    return res.json(question);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
}

async function getAnswer(req, res) {
  const theme = req.params.theme;
  const questionId = req.params.questionId;

  try {
    const choicesResult = await pool.query(`SELECT * FROM choices${theme} WHERE questionid = $1`, [questionId]);
    
    if (choicesResult.rows.length === 0) {
      return res.status(404).send('Choices not found');
    }

    const choices = choicesResult.rows;

    // Look for the choice that has "iscorrect: true"
    const correctChoice = choices.find(choice => choice.iscorrect === true);

    // After finding the iscorrect = true, remove all other items from the object and keep only the correct answer
    return res.json(correctChoice ? [correctChoice] : [])
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
}


module.exports = { getThemes, getQuestion, getAnswer };
