import { BsPersonFill, BsTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <>
      <div className={css.text_container}>
        <span className={css.item}>
          <BsPersonFill className={css.icon} />
          {contact.name}
        </span>

        <span className={css.item}>
          <BsTelephoneFill className={css.icon} />
          {contact.number}
        </span>
      </div>

      <button className={css.btn} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </>
  );
}
