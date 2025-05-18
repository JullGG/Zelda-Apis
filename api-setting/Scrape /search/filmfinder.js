const axios = require('axios');

async function sfilm(tipe) {
  try {
    const sessid = Array.from({ length: 21 }, () => 
      'abcdefghijklmnopqrstuvwxyz0123456789'[Math.floor(Math.random() * 36)]
    ).join('');

    const res = await axios.post('https://filmfinder.ai/api/main', {
      query: tipe,
      sessionId: sessid
    }, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36',
        'Referer': 'https://filmfinder.ai/',
        'Accept-Encoding': 'gzip, deflate, br'
      }
    });

    return res.data;

  } catch (er) {
    throw new Error(er.message);
  }
}

module.exports = sfilm;
