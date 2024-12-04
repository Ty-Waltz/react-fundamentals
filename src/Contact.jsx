import { Component } from 'react';
import styles from './Contact.module.css';

class Contact extends Component {
  render() {
    return (
      <section className={styles.contact}>
        <h2>Contact Information</h2>
        <p>Email: ty.waltz@yahoo.com</p>
      </section>
    );
  }
}

export default Contact;