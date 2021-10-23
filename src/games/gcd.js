import getRandom from '../lib/random.js';
import getGcd from '../lib/gcd.js';
import runGame from '../index.js';

const maxNumber = 100;
const rules = 'Find the greatest common divisor of given numbers.';

const getQuestionData = () => {
  const firstNumber = getRandom(1, maxNumber);
  const secondNumber = getRandom(1, maxNumber);
  const correctAnswer = getGcd(firstNumber, secondNumber);
  return [`${firstNumber} ${secondNumber}`, String(correctAnswer)];
};

export default () => runGame(rules, getQuestionData);
