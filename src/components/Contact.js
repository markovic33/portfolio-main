import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

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
      <div className="container mx-auto h-screen ">
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
              <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex mb-[80px]  text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 lg:justify-center lg:ml-[140px]"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="www.linkedin.com/in/jovanmarkovic9"
              >
                <FaLinkedin />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/markovic33"
              >
                <FaGithub />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/markoviconline/"
              >
                <FaInstagram />
              </a>
            </motion.div>
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
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-black/55 focus:border-blue-800 transition-all "
              type="text"
              placeholder="Your name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-black/55 focus:border-blue-800 transition-all "
              type="email"
              placeholder="Your email"
            />
            <textarea
              placeholder="Your Message"
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-black/55 focus:border-blue-800 transition-all resize-none mb-6 "
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
