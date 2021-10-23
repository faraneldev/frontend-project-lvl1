import getRandom from '../lib/random.js';
import isPrime from '../lib/prime.js';
import runGame from '../index.js';

const maxNumber = 100;
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionData = () => {
  const randomNumber = getRandom(1, maxNumber);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

export default () => runGame(rules, getQuestionData);
