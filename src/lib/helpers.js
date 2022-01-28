const getRandomQuotePosition = ( quotes ) => {
  const quotesNumber = quotes.length;
  const arrayPosition = Math.floor(Math.random() * quotesNumber);
  return arrayPosition;
}



module.exports = { getRandomQuotePosition };