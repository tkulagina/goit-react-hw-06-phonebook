import { useDispatch , useSelector} from 'react-redux';
import { remove, getContacts } from 'redux/sliceContact';
import { getFilter } from 'redux/sliceFilter';

import css from './ContactList.module.css';

export const ContactList = () => {
 
  const dispatch = useDispatch();
  const filtered = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  console.log (contacts);

  const filteredContacts = contacts.filter(({ name }) =>
  name.toLowerCase().includes(filtered.toLowerCase())
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

