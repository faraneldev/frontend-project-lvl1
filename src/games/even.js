import runGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

const getQuestionData = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

export default () => runGame(rules, getQuestionData);
