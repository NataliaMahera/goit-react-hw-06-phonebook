import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter-slice';
import { getFilter } from 'redux/selectors';
import css from './Filter.module.css';

// Компонент фільтрації контактів
const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = event => {
    const newValue = event.target.value;
    dispatch(changeFilter(newValue));
  };
  return (
    <>
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          className={css.input}
          value={value}
          onChange={onChangeFilter}
        />
      </label>
    </>
  );
};

export default Filter;
