const crypto = require('crypto');
require('dotenv').config();
const AES_BYTE = 16;

function encrypt(data) {
    const KEY = process.env.KEY;
    // For AES this is always 16
    let iv = crypto.randomBytes(AES_BYTE);
    let cipher = crypto.createCipheriv('aes-256-cbc',
        new Buffer.from(KEY), iv);
    let encrypted = cipher.update(data);

    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

function decrypt(data) {
    const KEY = process.env.KEY;
    let dataParts = data.split(':');
    let iv = new Buffer.from(dataParts.shift(), 'hex');
    let encryptedData = new Buffer.from(dataParts.join(':'), 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc',
        new Buffer.from(KEY), iv);
    let decryptedData = decipher.update(encryptedData);

    decryptedData = Buffer.concat([decryptedData, decipher.final()]);

    return decryptedData.toString();
}

module.exports = { encrypt, decrypt };