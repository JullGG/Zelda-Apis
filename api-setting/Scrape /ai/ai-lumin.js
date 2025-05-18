const axios = require('axios');
const crypto = require('crypto');

async function luminaiChat(text) {
  const userId = `user-${crypto.randomBytes(4).toString('hex')}`;
  const sessionId = crypto.randomBytes(8).toString('hex');
  
  const url = 'https://luminai.my.id/';
  const headers = {
    'Accept': '*/*',
    'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    'Cookie': `userId=${userId}; selectedType=luminai; sessionId=${sessionId}`,
    'Origin': 'https://luminai.my.id',
    'Referer': 'https://luminai.my.id/chat',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"'
  };
  
  const data = {
    content: text,
    user: userId,
    cName: 'luminai',
    cID: 'luminai'
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data; // Only return the API response
  } catch (error) {
    throw error;
  }
}

module.exports = luminaiChat;
