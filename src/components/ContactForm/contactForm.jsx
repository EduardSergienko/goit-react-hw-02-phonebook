import React, { Component } from 'react';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputtype = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  onSubmiteForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };
  render() {
    const { name, number } = this.state;
    return (
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
      </form>
    );
  }
}
