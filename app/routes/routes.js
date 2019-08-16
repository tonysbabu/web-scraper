module.exports = (app) => {
const controller = require('../controllers/controller.js');

app.get('/', controller.scrapeURL);


}