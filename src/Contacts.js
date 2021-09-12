import React from 'react';
import shortid from 'shortid';

export default class Feedback extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  nameInputId = shortid.generate();

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form>
          <label htmlFor={this.nameInputId}>Name</label>
          <input
            type="text"
            id={this.nameInputId}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          <li></li>
        </ul>
      </div>
    );
  }
}
