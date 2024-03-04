import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_805rrp2",
        "template_ugf4fne",
        form.current,
        "mqUne9AHpdwrWsDaa"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };
  return (
    <section id="contact" className="py-16 lg:section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-black font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together.
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-blue-800 transition-all "
              type="text"
              placeholder="Your name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-blue-800 transition-all "
              type="email"
              placeholder="Your email"
            />
            <textarea
              placeholder="Your Message"
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-blue-800 transition-all resize-none mb-6 "
            ></textarea>
            <button type="submit" className="btn btn-lg mb-10">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
