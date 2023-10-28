import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import "../css/contact.css";
import { AiFillCheckCircle } from "react-icons/ai";
import AOS from "aos";

// import dotenv from "dotenv";

function Contact() {
  AOS.init({
    duration: 550,
  });
  // Add TypeScript type annotations and comments for variables
  //   const emailServiceId: string = import.meta.env.VITE_EMAIL_SERVICE_ID;
  //   const emailTemplateId: string = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  //   const emailApiKey: string = import.meta.env.VITE_EMAIL_API_KEY;

  const contactRef = useRef<HTMLDivElement | null>(null);

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_npwzn1n",
          "template_lb7ddhi",
          form.current,
          "DpwFpJCd-Pru5--Nt"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            setIsSubmitted(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <>
      <div id="contact" ref={contactRef} className="contact-container">
        {isSubmitted ? (
          <div className="thank-you-message">
            <AiFillCheckCircle className="check-icon" />
            <p>
              Thank you for reaching out to us. We will respond as soon as
              possible
            </p>
          </div>
        ) : (
          <form
            data-aos="fade-up"
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >
            <h3 className="contact-us">Contact us</h3>
            <label className="form-label">Name</label>
            <input type="text" name="user_name" className="form-input" />
            <label className="form-label">Email</label>
            <input type="email" name="user_email" className="form-input" />
            <label className="form-label">Message</label>
            <textarea name="message" className="form-textarea" />
            <input type="submit" value="Get in touch" className="form-button" />
          </form>
        )}
      </div>
    </>
  );
}

export default Contact;
