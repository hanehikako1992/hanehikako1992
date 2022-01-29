const app = require('./server');


exports.handler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  return {
    statusCode: 200,
    body: 'hello world'
  }
};
