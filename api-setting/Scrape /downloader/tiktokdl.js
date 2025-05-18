const axios = require('axios');

async function scrapeTikTok(url) {
  const headers = {
    'accept': '*/*',
    'accept-language': 'en',
    'content-type': 'application/json',
    'g-footer': '1fa90cd16845ab55424f3a13641c4c19',
    'g-timestamp': '1747114488753',
    'origin': 'https://snapany.com',
    'priority': 'u=1, i',
    'referer': 'https://snapany.com/',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
  };

  const data = {
    "link": url
  };

  try {
    const response = await axios.post('https://api.snapany.com/v1/extract', data, { headers: headers });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return { error: 'Request failed' };
  }
}

module.exports = scrapeTikTok;
