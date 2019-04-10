const scrypt = require("scrypt");
const generatePbkdf2 = require("./secure");
const { createSign, generateKeyPairSync } = require('crypto'); 

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

const generateCookieInfo = info => {
  const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
      cipher: 'aes-256-cbc',
      passphrase: 'segur_is~quite*secure'   //let it pick from env_variable
    }
  });


  const sign = createSign('SHA256');
  sign.write('hello');
  sign.end(); 
  const signature = sign.sign(privateKey, 'hex');
  console.log(signature);
}; 

module.exports = {
  hashSaltPair,
  generateScrypt,
  generateCookieInfo,
  validateHash
};
