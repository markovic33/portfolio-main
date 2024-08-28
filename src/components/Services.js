import React from "react";
import denver from "../assets/denver.png";
import anime from "../assets/anime.png";
import watch from "../assets/watch.png";
import man from "../assets/man.png";
import job from "../assets/job.jpg";
import cuk from "../assets/cuk1.png";
import movie from "../assets/movieApp.png";
import res from "../assets/restoran1.png";
import air from "../assets/airbnb.png";
import quiz from "../assets/kviz.png";
import tenzis from "../assets/tenzis1.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import chat from "../assets/web_chat.png";
import airbnb1 from "../assets/airbnb1.png";
import blog from "../assets/blog.png";
import rent from "../assets/rentcar.png";
import ruza from "../assets/ruzavetrova.png";
import servis from "../assets/servis.png";
import reactblog from "../assets/blog_react.png";
import ecomreact from "../assets/eccom_react.png";

const Services = () => {
  return (
    <div id="services" className="lg:h-screen flex items-center">
      <div className="flex flex-col">
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col"
        >
          <h1 className="text-3xl ml-4 mb-2  text-gradient">NextJS</h1>

          <div class="flex overflow-x-auto space-x-8 ml-10 mr-10 ">
            <section class="flex-shrink-0 rounded-lg mb-2 ">
              <div className="group relative overflow-hidden border-2 max-h-[260px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={ruza}
                  alt="denver"
                  className="object-cover w-[280px] h-[130px] group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Nextjs</span>
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
            </section>

            <section class="flex-shrink-0 rounded-lg mb-2 ">
              <div className="group relative overflow-hidden border-2 max-h-[260px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={rent}
                  alt="denver"
                  className="object-cover w-[280px] h-[130px] group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Nextjs</span>
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
            </section>

            <section class="flex-shrink-0 rounded-lg mb-2 ">
              <div className="group relative overflow-hidden border-2 max-h-[260px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={blog}
                  alt="denver"
                  className="object-cover w-[280px] h-[130px] group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Nextjs</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Blog</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://next-blog-ten-puce.vercel.app/"
                    className=" underline text-xl text-white"
                  >
                    Visit site
                  </a>
                </div>
              </div>
            </section>

            <section class="flex-shrink-0 rounded-lg mb-2 ">
              <div className="group relative overflow-hidden border-2 max-h-[260px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={servis}
                  alt="denver"
                  className="object-cover w-[280px] h-[130px] group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Nextjs</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Servis Corado</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://servis-corado.vercel.app/"
                    className=" underline text-xl text-white"
                  >
                    Visit site
                  </a>
                </div>
              </div>
            </section>

            <section class="flex-shrink-0 rounded-lg mb-2 ">
              <div className="group relative overflow-hidden border-2 max-h-[260px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={airbnb1}
                  alt="denver"
                  className="object-cover w-[280px] h-[130px] group-hover:scale-110 transition-all duration-500"
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
            </section>

            <section class="flex-shrink-0 rounded-lg mb-2 ">
              <div className="group relative overflow-hidden border-2 max-h-[260px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={denver}
                  alt="denver"
                  className="object-cover w-[280px] h-[130px] group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Nextjs</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Denver Nuggets</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://next-denver-nuggets.vercel.app/"
                    className=" underline text-xl text-white"
                  >
                    Visit site
                  </a>
                </div>
              </div>
            </section>

            <section class="flex-shrink-0 rounded-lg mb-2 ">
              <div className="group relative overflow-hidden border-2 max-h-[260px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={anime}
                  alt="denver"
                  className="object-cover w-[280px] h-[130px] group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Nextjs</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Anime Site</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://next-anime-beta.vercel.app/"
                    className=" underline text-xl text-white"
                  >
                    Visit site
                  </a>
                </div>
              </div>
            </section>

            <section class="flex-shrink-0 rounded-lg mb-2 ">
              <div className="group relative overflow-hidden border-2 max-h-[260px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={watch}
                  alt="watch-site"
                  className="object-cover w-[280px] h-[130px] group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Nextjs</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Watch Store</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://next-watch-shop.vercel.app/"
                    className=" underline text-xl text-white"
                  >
                    Visit site
                  </a>
                </div>
              </div>
            </section>

            <section class="flex-shrink-0 rounded-lg mb-2 ">
              <div className="group relative overflow-hidden border-2 max-h-[260px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={man}
                  alt="man"
                  className="object-cover w-[280px] h-[130px] group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Nextjs</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Men's SHop</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://next-man-shop.vercel.app/"
                    className=" underline text-xl text-white"
                  >
                    Visit site
                  </a>
                </div>
              </div>
            </section>

            <section class="flex-shrink-0 rounded-lg mb-2 ">
              <div className="group relative overflow-hidden border-2 max-h-[260px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={job}
                  alt="job"
                  className="object-cover w-[280px] h-[130px] group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Nextjs</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Job Site</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://next-job-app-hazel.vercel.app/"
                    className=" underline text-xl text-white"
                  >
                    Visit site
                  </a>
                </div>
              </div>
            </section>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col"
        >
          <h1 className="text-3xl ml-4 mb-2 mt-2 text-gradient">PHP & SQL</h1>

          <div class="flex overflow-x-auto space-x-8 ml-10 mr-10 ">
            <section class="flex-shrink-0 rounded-lg mb-2 ">
              <div className="group relative overflow-hidden border-2 max-h-[260px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={chat}
                  alt="chat"
                  className="object-cover w-[280px] h-[130px] group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">PHP </span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Web Chat</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
                  <p className=" underline text-xl text-white">PHP/SQL</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col"
        >
          <h1 className="text-3xl ml-4 mb-2 mt-2 text-gradient">React</h1>

          <div class="flex overflow-x-auto space-x-8 ml-10 mr-10 ">

          <section class="flex-shrink-0 rounded-lg mb-2 ">
              <div className="group relative overflow-hidden border-2 max-h-[260px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={ecomreact}
                  alt="ecom"
                  className="object-cover w-[280px] h-[130px] group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">React</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">React Shop</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://ecommerce-shop-nextjs.vercel.app/"
                    className=" underline text-xl text-white"
                  >
                    Visit site
                  </a>
                </div>
              </div>
            </section>

          <section class="flex-shrink-0 rounded-lg mb-2 ">
              <div className="group relative overflow-hidden border-2 max-h-[260px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={reactblog}
                  alt="blog"
                  className="object-cover w-[280px] h-[130px] group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">React</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">React Blog</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://blog-react-firebase-mu.vercel.app/"
                    className=" underline text-xl text-white"
                  >
                    Visit site
                  </a>
                </div>
              </div>
            </section>

            <section class="flex-shrink-0 rounded-lg mb-2 ">
              <div className="group relative overflow-hidden border-2 max-h-[260px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={cuk}
                  alt="cuk"
                  className="object-cover w-[280px] h-[130px] group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">React</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Citroen Site</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
                  <p className=" underline text-xl text-white">React/ScSS</p>
                </div>
              </div>
            </section>

            <section class="flex-shrink-0 rounded-lg mb-2 ">
              <div className="group relative overflow-hidden border-2 max-h-[260px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={movie}
                  alt="movie"
                  className="object-cover w-[280px] h-[130px] group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">React</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Movie App</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
                  <p className=" underline text-xl text-white">React/ScSS</p>
                </div>
              </div>
            </section>

            <section class="flex-shrink-0 rounded-lg mb-2 ">
              <div className="group relative overflow-hidden border-2 max-h-[260px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={res}
                  alt="re"
                  className="object-cover w-[280px] h-[130px] group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">React</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Restourant Site</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
                  <p className=" underline text-xl text-white">React</p>
                </div>
              </div>
            </section>

            <section class="flex-shrink-0 rounded-lg mb-2 ">
              <div className="group relative overflow-hidden border-2 max-h-[260px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={air}
                  alt="air"
                  className="object-cover w-[280px] h-[130px] group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">React</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Air Bnb</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
                  <p className=" underline text-xl text-white">React</p>
                </div>
              </div>
            </section>

            <section class="flex-shrink-0 rounded-lg mb-2 ">
              <div className="group relative overflow-hidden border-2 max-h-[260px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={tenzis}
                  alt="tenzis"
                  className="object-cover w-[280px] h-[130px] group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">React</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Tenezis</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
                  <p className=" underline text-xl text-white">React</p>
                </div>
              </div>
            </section>

            <section class="flex-shrink-0 rounded-lg mb-2 ">
              <div className="group relative overflow-hidden border-2 max-h-[260px] border-white/50 rounded-xl">
                <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={quiz}
                  alt="quiz"
                  className="object-cover w-[280px] h-[130px] group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">React</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Quiz</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
                  <p className=" underline text-xl text-white">React</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
