const data = require('./simpsons.json')
const {readAll, readIdWithPromise} = require('./services');

readAll(data);
readIdWithPromise('0')
  .then(response => console.log(response))
  .catch(err => console.log(`${err}`));
