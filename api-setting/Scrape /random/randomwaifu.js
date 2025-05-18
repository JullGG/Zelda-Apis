const axios = require('axios');

async function getWaifu() {
  try {
    const response = await axios.get('https://api.waifu.pics/sfw/waifu');
    return response.data.url;
  } catch (error) {
    console.error('Gagal mengambil gambar:', error);
    throw error;
  }
}

module.exports = getWaifu;
