const axios = require('axios');
const FormData = require('form-data');
const { Readable } = require('stream');

const allowedTypes = ['js', 'ts', 'py', 'cpp', 'c', 'java', 'html', 'css', 'json', 'xml', 'php', 'rb', 'go', 'rs', 'sh', 'bat', 'kt'];

async function upcatboxTeks(teks, type) {
  if (!type) {
    throw new Error('Parameter type wajib diisi.');
  }

  if (!allowedTypes.includes(type)) {
    throw new Error(`Tipe file '${type}' tidak valid. Hanya diperbolehkan: ${allowedTypes.join(', ')}`);
  }

  const form = new FormData();
  const stream = Readable.from([teks]);
  form.append('reqtype', 'fileupload');
  form.append('fileToUpload', stream, {
    filename: `kode.${type}`,
    contentType: 'text/plain'
  });

  const response = await axios.post('https://catbox.moe/user/api.php', form, {
    headers: form.getHeaders()
  });

  return response.data;
}

module.exports = upcatboxTeks;
