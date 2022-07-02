import styles from 'components/ContactList/contactList.module.scss';
import PropTypes from 'prop-types';
export const ContactList = ({ children }) => {
  return <ul className={styles.contactList}>{children}</ul>;
};

ContactList.propTypes = {
  children: PropTypes.node.isRequired,
};
