import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { nanoid } from 'nanoid';
import { MainTitle } from "./ContactForm/ContactForm.styled";
import { Title } from "./ContactList/ContactList.styled";
export class App extends Component{
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  
  }

 addContact = NewContact =>{
  if (this.state.contacts.some(
    contact => contact.name.toLowerCase() === NewContact.name.toLowerCase())){
      alert(`${NewContact.name} is already in contacts`)
    return
  } else {
    this.setState(prevState =>({
      contacts: [...prevState.contacts, {
        id: nanoid(), 
        ...NewContact}] }) )
      }
 }

 deleteContact = contactID => {
  this.setState(prevState =>({
    contacts: prevState.contacts.filter(cont => cont.id !== contactID)
  }))
 }

 onChangeFilter = newFilter => {
  this.setState ({
    filter: newFilter
  });
 }
  render() {

    const searchContact = this.state.contacts.filter( cont => cont.name.toLowerCase().includes(this.state.filter.toLowerCase()));
    return (
      <div>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm  onAdd={this.addContact} />
    
      <Title>Contacts</Title>
      <Filter  filter={this.state.filter} onChangeFilter={this.onChangeFilter}/>
      <ContactList  items={searchContact} onDelete={this.deleteContact}/>
    </div>
  );}
}