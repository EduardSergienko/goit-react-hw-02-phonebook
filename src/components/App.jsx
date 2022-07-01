import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/contactForm';
import { Filter } from './Filter/filter';
import { ContactList } from './ContactList/contactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formData = data => {
    console.log(data);
    const { contacts } = this.state;
    const { name, number } = data;

    if (contacts.some(contact => contact.name === name)) {
      return alert('nonono');
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };

      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    }
    console.log(contacts);
  };

  onfilterInputType = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  filteredContactList = () => {
    const { contacts, filter } = this.state;
    const toLower = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(toLower)
    );
  };
  deletContact = contactid => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactid),
    }));
  };
  render() {
    const { filter } = this.state;
    const filteredContacts = this.filteredContactList();

    return (
      <>
        <h1>Phoneboock</h1>
        <ContactForm onSubmit={this.formData} />
        <div>
          <h2>Contacts</h2>
          <Filter onChange={this.onfilterInputType} value={filter} />
          <ContactList
            contacts={filteredContacts}
            onDeletbtnClick={this.deletContact}
          />
        </div>
      </>
    );
  }
}
