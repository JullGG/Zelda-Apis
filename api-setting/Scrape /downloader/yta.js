const axios = require('axios');

async function yta(url) {
  const apiUrl = 'https://cdn304.savetube.su/v2/info';
  const headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
    'content-type': 'application/json',
    'origin': 'https://ytmp3.at',
    'priority': 'u=1, i',
    'referer': 'https://ytmp3.at/',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'cross-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36'
  };

  const data = {
    url: url
  };

  try {
    const response = await axios.post(apiUrl, data, { headers });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch video info: ${error.message}`);
  }
}

module.exports = yta;
