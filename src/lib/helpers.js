const axios = require('axios');

const getAllCharacters = async () => {
  try {
    const response = await axios.get(
      'https://intense-journey-36207.herokuapp.com/character/all',
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch(err) {
    console.log('This is the error:' + err);
  }
}


module.exports = { getAllCharacters };