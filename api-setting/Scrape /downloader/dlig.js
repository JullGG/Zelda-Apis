const axios = require('axios');

async function dlig(url) {
  const response = await axios.post('https://www.fastdl.live/api/search', {
    url: url
  }, {
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Mobile Safari/537.36',
      'Referer': 'https://www.fastdl.live/'
    }
  });

  return response.data;
}

module.exports = dlig;
