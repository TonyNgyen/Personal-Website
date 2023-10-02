import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

function Contact() {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hrfd87w",
        "template_8h48u9n",
        form.current,
        "faNgOb9LHJLLNVTq6"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
          setFormValues({
            name: "",
            email: "",
            message: ""
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="bg-gray-100 pt-40 pb-40 min-h-screen" id="contact">
      <article className="font-montserrat">
        <h2 className="text-5xl font-semibold mb-6 text-center">Contact Me</h2>
        <div className="w-10 bg-Ruby h-2 mx-auto mb-6 rounded-md"></div>
        <h2 className="text-xl mx-auto w-5/12 mb-20 text-center">
          If you want to talk about an opportunity or just want to talk to me
          about anything, please do not hesitate to contact me!
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-Snow w-5/12 mx-auto px-10 py-8 drop-shadow-2xl rounded-lg"
        >
          <label className="block mb-2 font-bold">Name</label>
          <input
            type="text"
            name="user_name"
            className="block mb-8 bg-gray-200 w-full p-4 rounded-md drop-shadow-sm"
            placeholder="Enter Your Name"
            value={formValues.name}
            onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
          />
          <label className="block mb-2 font-bold">Email</label>
          <input
            type="email"
            name="user_email"
            className="block mb-8 bg-gray-200 w-full p-4 rounded-md drop-shadow-sm"
            placeholder="Enter Your Email"
            value={formValues.email}
            onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
          />
          <label className="block mb-2 font-bold">Message</label>
          <textarea
            name="message"
            placeholder="Enter Your Message"
            rows="8"
            className="block bg-gray-200 mb-8 w-full resize-none rounded-md drop-shadow-sm p-4 h-auto"
            value={formValues.message}
            onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
          />
          <div className="flex justify-end">
            <button className="hover:cursor-pointer bg-Ruby rounded-md">
              <input
                type="submit"
                value="Send"
                className="hover:cursor-pointer text-white font-bold text-xl py-3 px-10"
              />
            </button>
          </div>
        </form>
      </article>
    </section>
  );
}

export default Contact;
