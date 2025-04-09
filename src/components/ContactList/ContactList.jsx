import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactClist({ contacts, onDelete }) {
  return (
    <>
      {contacts.length === 0 ? (
        <div className={css.title_wrapper}>
          <span className={css.title}>There is no contact...</span>
        </div>
      ) : (
        <ul className={css.list}>
          {contacts.map((contact) => (
            <li className={css.wrapper} key={contact.id}>
              <Contact contact={contact} onDelete={onDelete} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
