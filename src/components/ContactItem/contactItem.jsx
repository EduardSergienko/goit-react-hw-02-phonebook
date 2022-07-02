import PropTypes from 'prop-types';
import styles from './contactItem.module.scss';
export const ContactItem = ({ contacts, onDeleteBtnClick }) => {
  return contacts.map(cont => {
    return (
      <li className={styles.contactList__item} key={cont.id}>
        <p className={styles.contactList__name}> {cont.name}: </p>
        <p className={styles.contactList__number}>{cont.number}</p>
        <button
          className={styles.contactList__btn}
          type="button"
          onClick={() => onDeleteBtnClick(cont.id)}
        >
          Delete
        </button>
      </li>
    );
  });
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
