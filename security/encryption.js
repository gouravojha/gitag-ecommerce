const CryptoJS = require('crypto-js');

const secretKey = process.env.ENCRYPTION_KEY || "ea9e8d6b48c4ed3f4abb949e4ce8747bba8ba69806d01133ce0a107893948465";

exports.encryptData = (data) => {
  const ciphertext = CryptoJS.AES.encrypt(data, secretKey).toString();
  return ciphertext;
}

exports.decryptData = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
  const originalData = bytes.toString(CryptoJS.enc.Utf8);
  return originalData;
}
