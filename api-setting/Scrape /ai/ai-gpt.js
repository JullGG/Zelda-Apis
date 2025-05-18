const axios = require('axios');

const askZeroGPT = async (text) => {
  const id = () => Math.random().toString(36).slice(2, 18);

  const res = await axios.post('https://zerogptai.org/wp-json/mwai-ui/v1/chats/submit', {
    botId: "default",
    customId: null,
    session: "N/A",
    chatId: id(),
    contextId: 39,
    messages: [],
    newMessage: text,
    newFileId: null,
    stream: true
  }, {
    headers: {
      'Content-Type': 'application/json',
      'X-WP-Nonce': 'e7b64e1953',
      'Accept': 'text/event-stream'
    },
    responseType: 'stream'
  });

  return new Promise((resolve, reject) => {
    let out = '';
    res.data.on('data', chunk => {
      chunk.toString().split('\n').forEach(line => {
        if (line.startsWith('data: ')) {
          try {
            const data = JSON.parse(line.slice(6));
            if (data.type === 'live') out += data.data;
            if (data.type === 'end') resolve(out);
          } catch (e) {}
        }
      });
    });

    res.data.on('error', reject);
  });
};

module.exports = askZeroGPT;