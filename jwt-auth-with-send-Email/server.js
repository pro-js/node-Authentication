let dotEnv = require('dotenv');
dotEnv.config({ path: './env/config.env'});
require('./db/connection');

let app = require('./app');

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server run on ${port} port!`);
});