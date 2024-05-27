import React from "react";
import anime from "../assets/anime.png";
import denver from "../assets/denver.png";
import man from "../assets/man.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import airbnb1 from "../assets/airbnb1.png";
import blog from "../assets/blog.png";
import rent from "../assets/rentcar.png";
import ruza from "../assets/ruzavetrova.png";

const Work = () => {
  return (
    <section id="work" className="">
      <div className="flex flex-col items-center gap-2 lg:flex-row min-h-screen py-4 px-[30px] ">
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex-col items-center justify-normal   "
        >
          <div className="mb-[10px] lg:mb-[22px]">
            <h2 className="h2 leading-tight text-accent">
              My Latest
              <br /> Work.
            </h2>
            <p className="max-w-sm mb-4">
              I like getting into the unknown and solving problems. I see
              programming as a very broad area where I can make a lot of
              progress.
            </p>
            <Link
              to="services"
              className="btn btn-sm py-2 px-4 cursor-pointer "
            >
              View all project
            </Link>
          </div>
          <div className="group relative overflow-hidden border-2 max-h-[260px] border-white/50 rounded-xl">
            <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              src={ruza}
              alt="man-shop"
              className="object-cover w-full h-full group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <span className="text-gradient">
                Nextjs/Prisma/Supabase/Responsive
              </span>
            </div>
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <span className="text-3xl text-white">
                Ruza Vetrova Sokobanja
              </span>
            </div>
            <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://ruzavetrova.vercel.app/"
                className=" underline text-xl text-white"
              >
                Visit site
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex-col items-center justify-normal   "
        >
          <div className="group relative overflow-hidden border-2 max-h-[260px]  mb-[10px]  border-white/50 rounded-xl">
            <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              src={rent}
              alt="denver"
              className="object-cover w-full h-full group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <span className="text-gradient">
                Nextjs/Prisma/Supabase/ShadncUI
              </span>
            </div>
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <span className="text-3xl text-white">Rent Luxury Car</span>
            </div>
            <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://rent-car-one-pink.vercel.app/"
                className=" underline text-xl text-white"
              >
                Visit site
              </a>
            </div>
          </div>

          <div className="group relative overflow-hidden border-2 max-h-[260px] border-white/50 rounded-xl">
            <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              src={airbnb1}
              alt="denver"
              className="object-cover w-full h-full group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <span className="text-gradient">Nextjs</span>
            </div>
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <span className="text-3xl text-white">Airbnb Clone</span>
            </div>
            <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://next-airbnb-clone-phi.vercel.app/"
                className=" underline text-xl text-white"
              >
                Visit site
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
