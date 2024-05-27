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
      <div className="container mx-auto ">
        <div className="flex flex-col  lg:flex-row lg:items-center  lg:gap-x-20 lg:gap-y-0 ">
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
                <div className="mb-4">
                  <div className="flex items-center gap-6 mb-1">
                    Css3
                    <img
                      className="rounded-full object-cover w-6 h-6"
                      src={css}
                      alt="/"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="bg-gray-200 h-3 rounded-full">
                    <div
                      className="bg-blue-500 h-full rounded-full"
                      style={{ width: "99%" }}
                    ></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-6 mb-1">
                    Html5
                    <img
                      className="rounded-full object-cover w-6 h-6"
                      src={html}
                      alt="/"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="bg-gray-200 h-3 rounded-full">
                    <div
                      className="bg-blue-500 h-full rounded-full"
                      style={{ width: "99%" }}
                    ></div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-6 mb-1">
                    JavaScript
                    <img
                      className="rounded-full object-cover w-6 h-6"
                      src={js}
                      alt="/"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="bg-gray-200 h-3 rounded-full">
                    <div
                      className="bg-blue-500 h-full rounded-full"
                      style={{ width: "99%" }}
                    ></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-6 mb-1">
                    Tailwind
                    <img
                      className="rounded-full object-cover w-6 h-6"
                      src={tailwind}
                      alt="/"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="bg-gray-200 h-3 rounded-full">
                    <div
                      className="bg-blue-500 h-full rounded-full"
                      style={{ width: "99%" }}
                    ></div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-6 mb-1">
                    Daisy UI
                    <img
                      className="rounded-full object-cover w-6 h-6"
                      src={daisy}
                      alt="/"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="bg-gray-200 h-3 rounded-full">
                    <div
                      className="bg-blue-500 h-full rounded-full"
                      style={{ width: "99%" }}
                    ></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-6 mb-1">
                    React
                    <img
                      className="rounded-full object-cover w-6 h-6"
                      src={react}
                      alt="/"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="bg-gray-200 h-3 rounded-full">
                    <div
                      className="bg-blue-500 h-full rounded-full"
                      style={{ width: "99%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <h1 className="h3">Backend</h1>
                <div className="mb-4">
                  <div className="flex items-center gap-6 mb-1">
                    Next.js
                    <img
                      className="rounded-full object-cover w-6 h-6"
                      src={next}
                      alt="/"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="bg-gray-200 h-3 rounded-full">
                    <div
                      className="bg-blue-500 h-full rounded-full"
                      style={{ width: "99%" }}
                    ></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-6 mb-1">
                    Prisma
                    <img
                      className="rounded-full object-cover w-6 h-6"
                      src={prisma}
                      alt="/"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="bg-gray-200 h-3 rounded-full">
                    <div
                      className="bg-blue-500 h-full rounded-full"
                      style={{ width: "99%" }}
                    ></div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-6 mb-1">
                    Mongo DB
                    <img
                      className="rounded-full object-cover w-6 h-6"
                      src={mongo}
                      alt="/"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="bg-gray-200 h-3 rounded-full">
                    <div
                      className="bg-blue-500 h-full rounded-full"
                      style={{ width: "99%" }}
                    ></div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-6 mb-1">
                    PHP
                    <img
                      className="rounded-full object-cover w-6 h-6"
                      src={php}
                      alt="/"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="bg-gray-200 h-3 rounded-full">
                    <div
                      className="bg-blue-500 h-full rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-6 mb-1">
                    SQL
                    <img
                      className="rounded-full object-cover w-6 h-6 "
                      src={sql}
                      alt="/"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="bg-gray-200 h-3 rounded-full">
                    <div
                      className="bg-blue-500 h-full rounded-full"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
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
              I'm a web developer with over 2 years of experience.
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

            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null} +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={30} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Client
                </div>
              </div>
            </div>
            <div className="hidden lg:flex  lg:justify-center lg:ml-[170px] lg:items-center  gap-x-6">
              <button className="btn btn-lg">Contact me</button>
              <a href="/" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
