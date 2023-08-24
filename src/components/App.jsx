import { useState, useEffect } from 'react';

import { ContactForm } from './Form/form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

// export class Ap extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };


//   handleAddContact = contact => {
//     const { contacts } = this.state;
//     const { name } = contact;


//     if (contacts.find(contact => contact.name === name)) {
//       alert(`${name} is already in contacts`);
//       return;
//     }

//     this.setState(prevState => {
//       return { contacts: [...prevState.contacts, contact] };
//     });

//   };

//   shouldComponentUpdate(nextProps, nextState) {
//     const { contacts } = nextState;
//     const formatedContacts = JSON.stringify(contacts);
//     localStorage.setItem('contacts', formatedContacts);
//     return true;
//   }

//   componentDidMount() {
//     // if (localStorage.getItem('contacts') !== null) {
//     //   this.setState(prevState => {
//     //   return { contacts: JSON.parse(localStorage.getItem('contacts')) };
//     // });
//     // }
//     const getContacts = JSON.parse(window.localStorage.getItem('contacts'));
//     if (getContacts) {
//       this.setState({
//         contacts: getContacts,
//       });
//     }
// }

//   handleDeleteContact = id => {
//     this.setState(prevState => {
//       return {
//         contacts: prevState.contacts.filter(contact => contact.id !== id),
//       };
//     });
//   };


//   handleFilter = e => {
//     this.setState({ filter: e.target.value });
//   };

//   render() {
//     const { contacts, filter } = this.state;

//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onAddContact={this.handleAddContact} />
//         <h2>Contacts</h2>
//         <Filter onFilter={this.handleFilter} filter={this.state.filter} />
//         <ContactList
//           contacts={contacts}
//           filter={filter}
//           onDeleteContact={this.handleDeleteContact}
//         />
//       </div>
//     );
//   }
// }

export const App = () => {

  const [contacts, setContacts] = useState([
  // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const handleAddContact = contact => {
    const { name } = contact;


    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    };

    // this.setState(prevState => {
    //   return { contacts: [...prevState.contacts, contact] };
    // });

    setContacts([...contacts, contact]);
    //SECOND WAY
    // if (contacts.length > 0) {
    //   localStorage.setItem('contacts', JSON.stringify(contacts));
    // }
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   const { contacts } = nextState;
  //   const formatedContacts = JSON.stringify(contacts);
  //   localStorage.setItem('contacts', formatedContacts);
  //   return true;
  // }


  //FIRST WAY
            useEffect(() => {
              if (contacts.length > 0) {
                localStorage.setItem('contacts', JSON.stringify(contacts));
              }
            }, [contacts]);

  // // componentDidMount() {
  // //   // if (localStorage.getItem('contacts') !== null) {
  // //   //   this.setState(prevState => {
  // //   //   return { contacts: JSON.parse(localStorage.getItem('contacts')) };
  // //   // });
  // //   // }
  // //   const getContacts = JSON.parse(window.localStorage.getItem('contacts'));
  // //   if (getContacts) {
  // //     this.setState({
  // //       contacts: getContacts,
  // //     });
  // //   }
  // //}
  
  useEffect(() => {
    const localStorageContacts = JSON.parse(window.localStorage.getItem('contacts'));
    if (localStorageContacts) {
      setContacts(localStorageContacts)
    }
  }, []);

  const handleDeleteContact = id => {
    // this.setState(prevState => {
    //   return {
    //     contacts: prevState.contacts.filter(contact => contact.id !== id),
    //   };
    // });
    // { ...contacts, contacts: contacts.filter(contact => contact.id !== id) }


    setContacts(contacts.filter(contact => contact.id !== id))
  };


  const handleFilter = e => {
    console.log('e', e.target.value)
    setFilter(e.target.value)
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter onFilter={handleFilter} filter={filter} />
      <ContactList
        contacts={contacts}
        onDeleteContact={handleDeleteContact}
        filter={filter}
      />
    </div>
  );
}