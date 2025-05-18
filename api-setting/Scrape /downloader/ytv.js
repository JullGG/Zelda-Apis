const axios = require('axios');

async function ytdl(url) {
  const videoId = extractVideoId(url);
  if (!videoId) throw new Error('Invalid YouTube URL');
  
  const apiUrl = "https://ac.insvid.com/converter";
  const headers = {
    "accept": "*/*",
    "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/json",
    "origin": "https://ac.insvid.com",
    "priority": "u=1, i",
    "referer": `https://ac.insvid.com/widget?url=https://www.youtube.com/watch?v=${videoId}&el=416`,
    "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sec-fetch-storage-access": "active",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
  };
  const data = {
    "id": videoId,
    "fileType": "mp4"
  };

  try {
    const response = await axios.post(apiUrl, data, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
}

function extractVideoId(url) {
  // Handle regular URLs
  let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  let match = url.match(regExp);
  if (match && match[2].length === 11) return match[2];
  
  // Handle YouTube Shorts URLs
  regExp = /^.*(youtube.com\/shorts\/)([^#&?]*).*/;
  match = url.match(regExp);
  if (match && match[2].length === 11) return match[2];
  
  // Handle youtu.be URLs
  regExp = /youtu.be\/([^#&?]*)/;
  match = url.match(regExp);
  if (match && match[1].length === 11) return match[1];
  
  return null;
}

module.exports = ytdl;
