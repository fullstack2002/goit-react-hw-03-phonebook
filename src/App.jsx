import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { Container } from './App.styled';
import React, { Component } from "react";

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = ({ newContact }) => {
		if (this.state.contacts.find((item) => item.name === newContact.name)) {
			alert(`${newContact.name} is already in contacts!`);
			return;
		}
		this.setState((prev) => ({ contacts: [...prev.contacts, newContact] }));
  };
  handleFilter = (e) => {
		this.setState({ filter: e.target.value });
	};
	handleDelete = (id) => {
		this.setState((prev) => ({
			contacts: prev.contacts.filter((el) => el.id !== id),
		}));
  };
  render() {
    return (
      <Container>
        <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter handleFilter={this.handleFilter}></Filter>
        <ContactList contacts={this.state.contacts}
					seek={this.state.filter}
					handleDelete={this.handleDelete}></ContactList>
      </div>
      </Container>
    )
  }
}
export default App;