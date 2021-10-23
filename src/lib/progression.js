export default (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression[i] = start + step * i;
  }
  return progression;
};
