const Contact = require('../models/Contact');

module.exports = {
  async index(request, response) {
    const contacts = await Contact.find();

    return response.json(contacts);
  },

  async show(request, response) {
    const { phone } = request.params;
    const contact = await Contact.findOne({ phone });
    
    if(!contact) return response.status(404).json();

    return response.json(contact);
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

  async update(request, response) {
    const { phone } = request.params;
    const contact = await Contact.findOne({ phone });

    if(!contact) return response.status(404).json();

    const { name, email } = request.body;

    const newContact = await Contact.updateOne({ phone }, {
      name: name,
      email: email
    });

    return response.json({
      modifiedCount: newContact.nModified,
      ok: newContact.ok
    });
  },

  async delete(request, response) {
    const { phone } = request.params;
    await Contact.deleteOne({ phone });

    return response.json();
  }

};