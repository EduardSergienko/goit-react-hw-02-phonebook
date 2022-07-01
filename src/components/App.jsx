import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/contactForm';
import { Filter } from './Filter/filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formData = data => {
    console.log(data);
    const { name, number } = data;
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
    console.log(this.contacts);
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
          <ul>
            {filteredContacts.map(cont => {
              return (
                <li key={cont.id}>
                  <p> {cont.name}:</p>
                  <p>{cont.number}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}
