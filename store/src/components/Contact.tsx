// import { useRef, useState, FormEvent } from "react";
// import emailjs from "@emailjs/browser";
// import "../css/contact.css";
// import { AiFillCheckCircle } from "react-icons/ai";
// import AOS from "aos";

// // import dotenv from "dotenv";

// function Contact() {
//   AOS.init({
//     duration: 550,
//   });
//   // Add TypeScript type annotations and comments for variables
//   //   const emailServiceId: string = import.meta.env.VITE_EMAIL_SERVICE_ID;
//   //   const emailTemplateId: string = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
//   //   const emailApiKey: string = import.meta.env.VITE_EMAIL_API_KEY;

//   const contactRef = useRef<HTMLDivElement | null>(null);

//   const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

//   const form = useRef<HTMLFormElement | null>(null);

//   const sendEmail = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (form.current) {
//       emailjs
//         .sendForm(
//           "service_npwzn1n",
//           "template_lb7ddhi",
//           form.current,
//           "DpwFpJCd-Pru5--Nt"
//         )
//         .then(
//           (result) => {
//             console.log(result.text);
//             console.log("message sent");
//             setIsSubmitted(true);
//           },
//           (error) => {
//             console.log(error.text);
//           }
//         );
//     }
//   };
//   return (
//     <>
//       <div id="contact" ref={contactRef} className="contact-container">
//         {isSubmitted ? (
//           <div className="thank-you-message">
//             <AiFillCheckCircle className="check-icon" />
//             <p>
//               Thank you for reaching out to us. We will respond as soon as
//               possible
//             </p>
//           </div>
//         ) : (
//           <form
//             data-aos="fade-up"
//             ref={form}
//             onSubmit={sendEmail}
//             className="contact-form"
//           >
//             <h3 className="contact-us">Contact us</h3>
//             <label className="form-label">Name</label>
//             <input type="text" name="user_name" className="form-input" />
//             <label className="form-label">Email</label>
//             <input type="email" name="user_email" className="form-input" />
//             <label className="form-label">Message</label>
//             <textarea name="message" className="form-textarea" />
//             <input type="submit" value="Get in touch" className="form-button" />
//           </form>
//         )}
//       </div>
//     </>
//   );
// }

// export default Contact;

import { useRef, RefObject } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form: RefObject<HTMLFormElement | null> = useRef(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          form.current,
          "YOUR_PUBLIC_KEY"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <div
        id="contact"
        className="text-center p-10 flex flex-col justify-center gap-4"
      >
        <h1 className="text-2xl text-gray-800   font-normal tracking-tight">
          Drop a line!{" "}
        </h1>
        <img
          src="./img/message.png"
          alt=""
          className="w-16 dark:invert mx-auto"
        />
      </div>
      <form
        onSubmit={sendEmail}
        className="px-10 lg:p-0 max-w-md mx-auto mb-12 "
      >
        <div className="mb-4">
          <input
            className="dark:invert rounded-xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
            type="text"
            name="user_name"
            placeholder="name"
          />
        </div>
        <div className="mb-4">
          <input
            className="dark:invert rounded-xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
            type="email"
            name="user_email"
            placeholder="email address"
          />
        </div>
        <div className="mb-6">
          <textarea
            className="dark:invert rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
            name="message"
            placeholder="message..."
          ></textarea>
        </div>
        <div className="text-center">
          <button
            className="mb-8 px-16	 bg-blue-500 hover:bg-blue-700 text-white font-normal py-2  rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            submit
          </button>
        </div>
      </form>
    </>
  );
};
export default Contact;
