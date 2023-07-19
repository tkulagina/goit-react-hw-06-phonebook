import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { ContactForm } from '../ContactForm/ContactForm';
import css from './App.module.css';


export const App = () => {
 

  return (
    <div className={css.wrapper}>
      <h1 className={css.mainTitle }>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title }>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};