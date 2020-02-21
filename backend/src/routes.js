const { Router } = require('express');
const ContactController = require('./controllers/ContactController');
const routes = Router();

// Query: req.query
// Route: req.params
// Body : req.body

routes.get('/contacts', ContactController.index);
routes.post('/contacts', ContactController.store);
routes.delete('/contacts/:phone', ContactController.delete);

module.exports = routes;