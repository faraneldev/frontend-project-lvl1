import getRandom from '../lib/random.js';
import getProgression from '../lib/progression.js';
import runGame from '../index.js';

const maxProgressionStart = 20;
const maxProgressionStep = 10;
const maxProgressionLength = 10;
const rules = 'What number is missing in the progression?';

const getQuestionData = () => {
  const progressionStart = getRandom(1, maxProgressionStart);
  const progressionStep = getRandom(1, maxProgressionStep);
  const hiddenElementIndex = getRandom(0, maxProgressionLength - 1);
  const progression = getProgression(progressionStart, progressionStep, maxProgressionLength);
  const correctAnswer = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '..';
  return [`${progression.join(' ')}`, String(correctAnswer)];
};

export default () => runGame(rules, getQuestionData);
