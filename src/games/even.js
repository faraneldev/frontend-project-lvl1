import getRandom from '../lib/random.js';
import runGame from '../index.js';

const maxNumber = 50;
const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

const getQuestionData = () => {
  const isEven = (num) => num % 2 === 0;

  const randomNumber = getRandom(1, maxNumber);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

export default () => runGame(rules, getQuestionData);
