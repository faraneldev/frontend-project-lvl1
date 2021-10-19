import getRandomNumber from '../lib/random.js';
import runGame from '../index.js';

const maxNumber = 50;
const rules = 'What is the result of the expression?';

const getQuestionData = () => {
  const firstNumber = getRandomNumber(1, maxNumber);
  const secondNumber = getRandomNumber(1, maxNumber);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;
    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;
    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;
    default:
      break;
  }
  return [`${firstNumber} ${operator} ${secondNumber}`, String(correctAnswer)];
};

export default () => runGame(rules, getQuestionData);
