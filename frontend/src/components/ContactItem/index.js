import React from 'react';
import Icon from '../Icon';

import './styles.css';

function ContactItem({ contact, onDelete }) {

  function deleteContact(){
    onDelete(contact.phone);
  }

  return(
    <li className="contact-item">
      <header>
        <div className="contact-info">
          <strong>{contact.name}</strong>
        </div>
        <div className="icons">
          <Icon onClick={deleteContact} type="trash"/>
        </div>
      </header>
      <p>Email: {contact.email}</p> 
      <p>Celular: {contact.phone}</p>
    </li>
  );
}

export default ContactItem;