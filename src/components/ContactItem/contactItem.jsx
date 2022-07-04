import PropTypes from 'prop-types';
import styles from './contactItem.module.scss';
export const ContactItem = ({ id, name, number, onDeleteBtnClick }) => {
  return (
    <li className={styles.contactList__item} key={id}>
      <p className={styles.contactList__name}> {name}: </p>
      <p className={styles.contactList__number}>{number}</p>
      <button
        className={styles.contactList__btn}
        type="button"
        onClick={onDeleteBtnClick}
      >
        Delete
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteBtnClick: PropTypes.func.isRequired,
};
