import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from 'redux/sliceFilter';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <>
      <div className={css.wrapper}>
      <label htmlFor="" className={css.label}>
        <span>Find contacts by name</span>
      </label>
      <input
        className={css.input}
        value={filter}
        onChange={onChange}
        type="text"
        name="filter"
        placeholder="Find contacts by name"
      />
      </div>
    </>
  )
};

Filter.propTypes = {
  filter: PropTypes.string,
  OnChange: PropTypes.func,
};