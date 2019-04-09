const scrypt = require("scrypt");
const generatePbkdf2 = require('./secure');

const generateScrypt = (secret, salt) => {
  const hat = require("hat");
  const sugar = salt || `${hat(256, 32)}`;
  return {
    hash: scrypt
      .hashSync(secret, { N: 65536, r: 8, p: 1 }, 128, sugar)
      .toString("base64"),
    salt: sugar 
  };
};

const hashSaltPair = password => {
  return generateScrypt(generatePbkdf2(password));
};

const validateHash = (hash, key, salt) => { 
  return hash === generateScrypt(key, salt).hash ? true : false;
};

module.exports = {
  hashSaltPair,
  generateScrypt,
  validateHash
};
