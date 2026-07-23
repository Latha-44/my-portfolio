"use client";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";


export default function Contact() {


  const contactItems = [

    {
      title: "Email",
      description: "Let's discuss opportunities",
      value: "lathayamini.123@gmail.com",
      icon: <FaEnvelope />,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=lathayamini.123@gmail.com"
    },


    {
      title: "LinkedIn",
      description: "Connect professionally",
      value: "View my profile",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/lathasri-deevi-25614037b"
    },


    {
      title: "GitHub",
      description: "Explore my projects",
      value: "View repositories",
      icon: <FaGithub />,
      link: "https://github.com/Latha-44"
    }

  ];



  return (

    <section
      id="contact"
      className="
      relative
      min-h-screen
      bg-gradient-to-br
      from-black
      via-purple-950
      to-black
      text-white
      px-6
      py-24
      flex
      items-center
      justify-center
      overflow-hidden
      "
    >


      {/* Background Glow */}

      <div
        className="
        absolute
        w-80
        h-80
        bg-purple-600/20
        rounded-full
        blur-3xl
        top-10
        left-10
        "
      />


      <div
        className="
        absolute
        w-80
        h-80
        bg-blue-500/20
        rounded-full
        blur-3xl
        bottom-10
        right-10
        "
      />





      <div
        className="
        relative
        max-w-6xl
        w-full
        text-center
        "
      >



        {/* Badge */}

        <div
          className="
          inline-flex
          items-center
          px-5
          py-2
          rounded-full
          bg-purple-500/10
          border
          border-purple-400/30
          text-purple-300
          text-sm
          mb-6
          "
        >
          🚀 Open to Software Development Opportunities
        </div>





        <h2
          className="
          text-4xl
          sm:text-6xl
          font-bold
          bg-gradient-to-r
          from-purple-300
          via-white
          to-purple-300
          bg-clip-text
          text-transparent
          "
        >
          Let's Connect
        </h2>





        <p
          className="
          mt-6
          max-w-2xl
          mx-auto
          text-gray-400
          text-lg
          leading-relaxed
          "
        >
          I am passionate about building modern web applications,
          solving real-world problems, and connecting with people
          who share the same interest in technology and innovation.
        </p>






        {/* Contact Cards */}

        <div
          className="
          mt-14
          grid
          grid-cols-1
          md:grid-cols-3
          gap-8
          "
        >


          {
            contactItems.map((item,index)=>(


              <a

                key={index}

                href={item.link}

                target="_blank"

                rel="noopener noreferrer"

                className="
                group
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                rounded-3xl
                p-8
                hover:-translate-y-3
                hover:border-purple-400
                hover:shadow-2xl
                hover:shadow-purple-500/20
                transition
                duration-500
                "

              >



                <div
                  className="
                  text-purple-400
                  text-4xl
                  flex
                  justify-center
                  mb-5
                  group-hover:scale-110
                  transition
                  "
                >

                  {item.icon}

                </div>





                <h3
                  className="
                  text-xl
                  font-semibold
                  "
                >

                  {item.title}

                </h3>





                <p
                  className="
                  text-gray-400
                  mt-2
                  text-sm
                  "
                >

                  {item.description}

                </p>





                <p
                  className="
                  text-purple-300
                  mt-4
                  text-sm
                  "
                >

                  {item.value}

                </p>



              </a>


            ))
          }



        </div>






        {/* Footer Text */}

        <p
          className="
          mt-16
          text-gray-500
          text-sm
          "
        >
          © {new Date().getFullYear()} Deevi Lathasri. All Rights Reserved.
        </p>



      </div>



    </section>

  );

}