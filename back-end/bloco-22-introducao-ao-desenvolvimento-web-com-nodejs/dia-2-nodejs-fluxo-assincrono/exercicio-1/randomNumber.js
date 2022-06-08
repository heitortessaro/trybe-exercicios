const randomNumber = (max) => {
  if (typeof max !== 'number') return max
  return Math.floor(Math.random() * max + 1);
}

module.exports ={
  randomNumber,
}