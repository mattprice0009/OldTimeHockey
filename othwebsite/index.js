require('dotenv').config();
const next = require('next');
const routes = require('./backend/api/routes');
const server = require('./backend');

const nextApp = next({ dir: './frontend' });
const handleNext = nextApp.getRequestHandler();
const port = process.env.PORT || 8091;

nextApp
  .prepare()
  .then(() => {
    routes(server, handleNext);

    server.listen(port, () => {
      console.info(`Server listening on Port ${port}.`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
