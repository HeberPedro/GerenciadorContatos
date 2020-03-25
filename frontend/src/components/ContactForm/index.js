import React, { useState, useEffect } from 'react';

import './styles.css';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      name,
      email,
      phone
    });
    // Limpa o valor dos campos
    setName('');
    setEmail('');
    setPhone('');
  }

  return (
    <form onSubmit={handleSubmit} autocomplete="off">
      <div className="input-block">
        <label htmlFor="name">Nome</label>
        <input name="name" 
        id="name" 
        required
        value={name}
        onChange={e => setName(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="email">Email</label>
        <input 
          name="email" 
          id="email" 
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="phone">Celular</label>
        <input 
          name="name" 
          id="name" 
          required
          value={phone}
          onChange={e => setPhone(e.target.value)}
          />
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
}

export default ContactForm;
