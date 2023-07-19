import css from './ContactList.module.css';

import { useDispatch } from 'react-redux';
import { remove } from 'redux/sliceContact';
import { useSelector } from 'react-redux';


export const ContactList = () => {
 
  const dispatch = useDispatch();
  const filtered = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);

  const normalizedFilter = filtered.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );



  return filteredContacts.map(cont => {
    return (
      <p key={cont.id} className={css.list}>
        <span className={css.text}>
          {cont.name}: {cont.number}
        </span>
        <button
          className={css.btn}
          type="button"
          onClick={() => {
            dispatch(remove(cont.id));
          }}
        >
          Delete
        </button>
      </p>
    );
  });
};

