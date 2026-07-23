"use client";

import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 bg-gradient-to-br from-black via-purple-950 to-black text-white flex items-center justify-center px-6 overflow-hidden">

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">


        {/* LEFT CONTENT */}

        <div className="space-y-7 text-center lg:text-left">


          <p className="text-purple-400 text-base sm:text-lg font-medium">
            Building Innovative Web Experiences With Modern Technologies ✨
          </p>


          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Deevi Lathasri
          </h1>


          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            Aspiring Software Developer 🚀
          </h2>




          <div className="text-lg sm:text-xl lg:text-2xl text-purple-300 font-semibold">

            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React.js Developer",
                2000,
                "JavaScript Developer",
                2000,
                "Problem Solver",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>





          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">

            I build responsive and user-friendly web applications using
            modern technologies. Passionate about frontend development,
            creating scalable solutions and solving real-world problems.

          </p>





          {/* BUTTONS */}


          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">


            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition shadow-lg shadow-purple-500/30"
            >
              View Projects
            </a>




            <a
              href="/resume/Latha%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-purple-400 hover:bg-purple-900 transition"
            >
              View Resume
            </a>


          </div>







          {/* SOCIAL LINKS */}


          <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-5 text-gray-300">


            <a
              href="https://www.linkedin.com/in/lathasri-deevi-25614037b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-400 transition"
            >
              <FaLinkedin size={24}/>
              LinkedIn
            </a>



            <a
              href="https://github.com/Latha-44"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-400 transition"
            >
              <FaGithub size={24}/>
              GitHub
            </a>




            <a
              href="mailto:lathayamini.123@gmail.com"
              className="flex items-center gap-2 hover:text-purple-400 transition"
            >
              <FaEnvelope size={24}/>
              Email
            </a>


          </div>



        </div>







        {/* RIGHT IMAGE SECTION */}



        <div className="relative flex justify-center items-center mt-16 lg:mt-0">





          {/* SKILL TAGS */}



          <div
            className="
            absolute -top-12 left-1/2 -translate-x-1/2
            bg-white/10 backdrop-blur-xl
            border border-white/20
            px-5 py-2 rounded-full
            text-sm sm:text-base shadow-lg"
          >
            React.js ⚛️
          </div>




          <div
            className="
            absolute top-16 -left-5 sm:-left-12
            bg-white/10 backdrop-blur-xl
            border border-white/20
            px-5 py-2 rounded-full
            text-sm sm:text-base shadow-lg"
          >
            HTML5 🌐
          </div>




          <div
            className="
            absolute top-16 -right-5 sm:-right-12
            bg-white/10 backdrop-blur-xl
            border border-white/20
            px-5 py-2 rounded-full
            text-sm sm:text-base shadow-lg"
          >
            JavaScript ⚡
          </div>




          <div
            className="
            absolute bottom-20 -left-5 sm:-left-12
            bg-white/10 backdrop-blur-xl
            border border-white/20
            px-5 py-2 rounded-full
            text-sm sm:text-base shadow-lg"
          >
            CSS3 🎨
          </div>




          <div
            className="
            absolute bottom-20 -right-5 sm:-right-12
            bg-white/10 backdrop-blur-xl
            border border-white/20
            px-5 py-2 rounded-full
            text-sm sm:text-base shadow-lg"
          >
            MongoDB 🍃
          </div>







          {/* PROFILE IMAGE */}



          <div
            className="
            w-[260px] h-[260px]
            sm:w-[320px] sm:h-[320px]
            lg:w-[360px] lg:h-[360px]
            rounded-full
            bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500
            p-1
            shadow-2xl shadow-purple-500/40"
          >


            <div className="w-full h-full rounded-full overflow-hidden bg-black">


              <Image
                src="/images/Profile.jpeg"
                alt="Deevi Lathasri"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />


            </div>


          </div>



        </div>



      </div>


    </section>
  );
}