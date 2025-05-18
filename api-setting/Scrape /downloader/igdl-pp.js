/*
 • Fitur By Anomaki Team
 • Created : xyzan code
 • PROFILE DOWNLOADER INSTAGRAM, MYN JELAS (*Simple Scrape*)
 • Jangan Hapus Wm
 • https://whatsapp.com/channel/0029Vaio4dYC1FuGr5kxfy2l
*/
const axios = require('axios');
async function dlp(username) {
    const postd = `url=${encodeURIComponent(username)}&lang=en`;

    const res = await axios.post('https://api.instasave.website/dp', postd, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36',
            'Referer': 'https://instasave.website/download'
        },
        decompress: true
    });

    const imurl = res.data.match(/<img src="([^"]+)"/);
    if (!imurl || !imurl[1]) {
        const ambilurl = res.data.match(/cdn\.instasave\.website[^"]+/);
        if (!ambilurl) throw new Error('Gagal ambol pto');
        return {
            url: `https://${ambilurl[0]}`
        };
    }

    return {
        url: imurl[1]
    };
}

module.exports = dlp;
