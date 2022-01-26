const getRandomQuotePosition = ( quotes ) => {
  const quotesNumber = quotes.length;
  console.log(quotesNumber);
  return Math.floor(Math.random * quotesNumber);
}



module.exports = { getRandomQuotePosition };