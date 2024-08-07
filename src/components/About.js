import React from "react";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import css from "../assets/css.jpg";
import html from "../assets/html.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import next from "../assets/next.png";
import prisma from "../assets/prisma.png";
import tailwind from "../assets/tailwind.png";
import daisy from "../assets/daisy.png";
import mongo from "../assets/mongo.jpg";
import php from "../assets/php.png";
import sql from "../assets/sql.png";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <div ref={ref} id="about" className="section">
      <div className="container mx-auto h-screen ">
        <div className="flex flex-col  lg:flex-row lg:items-center  lg:gap-x-30 lg:gap-y-0 ">
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:flex  gap-x-6"
          >
            <>
              <div className="hidden lg:block lg:w-1/2">
                <h1 className="h3">Frontend</h1>
                <motion.div
                  variants={fadeIn("down", 0.7)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.35 }}
                  className="flex-1 lg:flex  gap-x-6 mb-4"
                >
                  <div className="flex items-center gap-6 mb-1 font-medium">
                    Css3
                    <img
                      className="rounded-full object-cover w-7 h-7"
                      src={css}
                      alt="/"
                      width={30}
                      height={30}
                    />
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("down", 0.85)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="flex-1 lg:flex  gap-x-6 mb-4"
                >
                  <div className="flex items-center gap-6 mb-1 font-medium">
                    Html5
                    <img
                      className="rounded-full object-cover w-7 h-7"
                      src={html}
                      alt="/"
                      width={30}
                      height={30}
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn("down", 0.9)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.45 }}
                  className="flex-1 lg:flex  gap-x-6 mb-4"
                >
                  <div className="flex items-center gap-6 mb-1 font-medium">
                    JavaScript
                    <img
                      className="rounded-full object-cover w-7 h-7"
                      src={js}
                      alt="/"
                      width={30}
                      height={30}
                    />
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("down", 1.05)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  className="flex-1 lg:flex  gap-x-6 mb-4"
                >
                  <div className="flex items-center gap-6 mb-1 font-medium">
                    Tailwind
                    <img
                      className="rounded-full object-cover w-7 h-7"
                      src={tailwind}
                      alt="/"
                      width={30}
                      height={30}
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn("down", 1.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.55 }}
                  className="flex-1 lg:flex  gap-x-6 mb-4"
                >
                  <div className="flex items-center gap-6 mb-1 font-medium">
                    Daisy UI
                    <img
                      className="rounded-full object-cover w-7 h-7"
                      src={daisy}
                      alt="/"
                      width={30}
                      height={30}
                    />
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("down", 1.35)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.6 }}
                  className="flex-1 lg:flex  gap-x-6 mb-4"
                >
                  <div className="flex items-center gap-6 mb-1 font-medium">
                    React
                    <img
                      className="rounded-full object-cover w-7 h-7"
                      src={react}
                      alt="/"
                      width={30}
                      height={30}
                    />
                  </div>
                </motion.div>
              </div>

              <div className="lg:w-1/2">
                <h1 className="h3">Backend</h1>
                <motion.div
                  variants={fadeIn("left", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex-1 lg:flex  gap-x-6 mb-4"
                >
                  <div className="flex items-center gap-6 mb-1 font-medium">
                    Next.js
                    <img
                      className="rounded-full object-cover w-7 h-7"
                      src={next}
                      alt="/"
                      width={30}
                      height={30}
                    />
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.7)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.35 }}
                  className="flex-1 lg:flex  gap-x-6 mb-4"
                >
                  <div className="flex items-center gap-6 mb-1 font-medium">
                    Prisma
                    <img
                      className="rounded-full object-cover w-7 h-7"
                      src={prisma}
                      alt="/"
                      width={30}
                      height={30}
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn("up", 0.85)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="flex-1 lg:flex  gap-x-6 mb-4"
                >
                  <div className="flex items-center gap-6 mb-1 font-medium">
                    Mongo DB
                    <img
                      className="rounded-full object-cover w-7 h-7"
                      src={mongo}
                      alt="/"
                      width={30}
                      height={30}
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn("up", 1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.45 }}
                  className="flex-1 lg:flex  gap-x-6 mb-4"
                >
                  <div className="flex items-center gap-6 mb-1 font-medium">
                    PHP
                    <img
                      className="rounded-full object-cover w-7 h-7"
                      src={php}
                      alt="/"
                      width={30}
                      height={30}
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn("up", 1.15)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  className="flex-1 lg:flex  gap-x-6 mb-4"
                >
                  <div className="flex items-center gap-6 mb-1 font-medium">
                    SQL
                    <img
                      className="rounded-full object-cover w-7 h-7 "
                      src={sql}
                      alt="/"
                      width={30}
                      height={30}
                    />
                  </div>
                </motion.div>
              </div>
            </>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mt-10 "
          >
            <h2 className="h2">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a web developer with over 3 years of experience.
            </h3>
            <p className="mb-6">
              {" "}
              I like getting into the unknown and solving problems.I see
              programming as a very broad area where I can make a lot of
              progress.
              <br /> If I need to define myself in one sentence that would be a
              family person, a sports fanatic, a car enthusiast and
              tech-obsessed.
            </p>

            <div className="flex gap-x-6 lg:gap-x-10 mb-1 font-medium2">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null} +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={40} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Client
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
