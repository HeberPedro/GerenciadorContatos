import React, { useState, useEffect } from 'react';
import api from './services/api'

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import ContactForm from './components/ContactForm';
import ContactItem from './components/ContactItem';

// Component  : Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente "Pai" passa para o componente "Filho"
// Estado     : Informações mantida pelo componente (Lembrar: imutabilidade)

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Carrega lista de contatos
    async function loadContacts() {
      const response = await api.get('/contacts');

      setContacts(response.data);
    }

    loadContacts();
  }, [])

  async function handleAddContact(data) {
    const response = await api.post('/contacts', data);
    // Cria o array do zero, copia todos os contatos que já existem no estado
    // e adiciona o novo contato no final
    setContacts([...contacts, response.data]);
  }

  async function handleDeleteContact(phone) {
    await api.delete(`contacts/${phone}`);
    setContacts(contacts.filter(contact=>contact.phone!==phone));
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <ContactForm onSubmit={handleAddContact}/>
      </aside>
      <main>
        <ul>
          {contacts.map(contact => (
            <ContactItem key={contact._id} contact={contact} onDelete={handleDeleteContact}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
