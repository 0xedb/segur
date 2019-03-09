
const Init = process.env.SEGUR_STATE !== 'production' ? require('dotenv').config() : null;

module.export = Init;