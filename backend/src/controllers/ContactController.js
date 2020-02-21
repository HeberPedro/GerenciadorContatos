const Contact = require('../models/Contact');

module.exports = {
  async index(request, response) {
    const contacts = await Contact.find();

    return response.json(contacts);
  },

  async store(request, response) {
    const { name, email, phone } = request.body;

    let contact = await Contact.findOne({ phone });

    if(!contact) {
      contact = await Contact.create({
        name,
        email, 
        phone
      });
    }
  
    return response.json(contact);
  },

  async delete(request, response) {
    const { phone } = request.params;
    await Contact.deleteOne({ phone });

    return response.json();
  }

};