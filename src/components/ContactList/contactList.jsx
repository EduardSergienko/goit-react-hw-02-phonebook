export const ContactList = ({ contacts, onDeletbtnClick }) => {
  return (
    <ul>
      {contacts.map(cont => {
        return (
          <li key={cont.id}>
            <p> {cont.name}:</p>
            <p>{cont.number}</p>
            <button type="button" onClick={() => onDeletbtnClick(cont.id)}>
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
