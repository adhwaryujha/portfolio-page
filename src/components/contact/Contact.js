import { IoIosMail } from "react-icons/io";
import classes from "./Contact.module.css";
import { ImWhatsapp } from "react-icons/im";

const Contact = () => {
  return (
    <section id="contact" className={classes.mainDiv}>
      <h5>Lets Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className={classes.contact__container}>
        <div className={classes.contact__options}>
          <article className={classes.contact__option}>
            <IoIosMail className={classes.icon} />
            <h4>Email</h4>
            <h5>adhwaryujha@gmail.com</h5>
            <a href="mailto:adhwaryujha@gmail.com">Send an Email</a>
          </article>
          <article className={classes.contact__option}>
            <ImWhatsapp className={classes.icon} />
            <h4>WhatsApp</h4>
            <h5>+91-8967826987</h5>
            <a href="https://api.whatsapp.com/send?phone=+918967826987">
              Send me a Text
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className={classes.bttn}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
