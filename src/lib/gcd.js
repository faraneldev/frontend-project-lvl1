const gcd = (first, second) => {
  if (second !== 0) {
    const temp = first % second;
    return gcd(second, temp);
  }
  return first;
};

export default gcd;
