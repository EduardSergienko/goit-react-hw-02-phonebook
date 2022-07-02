import styles from 'components/ContactList/contactList.module.scss';
import PropTypes from 'prop-types';
export const ContactList = ({ contacts, onDeleteBtnClick }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(cont => {
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
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteBtnClick: PropTypes.func.isRequired,
};
