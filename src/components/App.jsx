import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  onInputtype = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  onSubmiteForm = e => {
    e.preventDefault();
    const { name, contacts, number } = this.state;
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState({
      contacts: [contact, ...contacts],
    });
    console.log(contacts);
  };

  onfilterInputType = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  filteredContactList = data => {
    const { filter } = this.state;
    const toLower = filter.toLowerCase();
    return data.filter(contact => contact.name.toLowerCase().includes(toLower));
  };

  render() {
    const { name, contacts, number, filter } = this.state;
    const filteredData = this.filteredContactList(contacts);

    return (
      <>
        <h1>Phoneboock</h1>
        <form onSubmit={this.onSubmiteForm}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.onInputtype}
            />
          </label>
          <label>
            Phone
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.onInputtype}
            />
          </label>
          <button type="submit">Add Contact</button>

          <div>
            <h2>Contacts</h2>
            <p>Find</p>
            <input
              onChange={this.onfilterInputType}
              type="text"
              value={filter}
            />
            <ul>
              {filteredData.map(cont => {
                return (
                  <li key={cont.id}>
                    <p> {cont.name}:</p>
                    <p>{cont.number}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </form>
      </>
    );
  }
}
