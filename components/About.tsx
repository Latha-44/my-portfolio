"use client";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white px-6 py-24"
    >

      {/* Heading */}

      <div className="text-center mb-16">

        <h2 className="text-4xl sm:text-5xl font-bold">
          About Me
        </h2>

        <p className="mt-4 text-purple-300 text-lg">
          Electronics Engineer exploring the world of Software Development ✨
        </p>

      </div>



      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">



        {/* INTRO CARD */}

        <div
          className="
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          rounded-3xl
          p-8
          shadow-2xl
          hover:scale-[1.02]
          transition
          "
        >

          <h3 className="text-3xl font-bold text-purple-300 mb-6">
            Hello, I'm Lathasri 👋
          </h3>


          <p className="text-gray-300 leading-relaxed text-lg">

            I am an Electronics and Communication Engineering (ECE)
            student with a strong passion for software development,
            frontend technologies, and building modern digital solutions.

          </p>


          <p className="mt-5 text-gray-300 leading-relaxed text-lg">

            My journey started with electronics, but my curiosity
            towards programming helped me explore web development.
            I enjoy creating responsive, user-friendly applications
            using HTML, CSS, JavaScript, React.js and MERN Stack.

          </p>


          <p className="mt-5 text-gray-300 leading-relaxed text-lg">

            I am continuously improving my problem-solving skills,
            learning new technologies, and aiming to become a skilled
            Software Developer who creates impactful solutions.

          </p>



        </div>





        {/* EDUCATION TIMELINE */}


        <div>


          <h3 className="text-3xl font-bold text-purple-300 mb-8">
            Education Journey 🎓
          </h3>



          <div className="space-y-8">



            {/* BTECH */}

            <div
              className="
              border-l-4 border-purple-500
              pl-6
              bg-white/5
              rounded-xl
              p-5
              "
            >

              <h4 className="text-xl font-bold">
                Bachelor of Technology (B.Tech)
              </h4>


              <p className="text-gray-300 mt-2">
                Electronics and Communication Engineering (ECE)
              </p>


              <p className="text-purple-300 mt-2">
                2023 - Present
              </p>

            </div>





            {/* INTERMEDIATE */}


            <div
              className="
              border-l-4 border-purple-500
              pl-6
              bg-white/5
              rounded-xl
              p-5
              "
            >

              <h4 className="text-xl font-bold">
                Intermediate Education
              </h4>


              <p className="text-gray-300 mt-2">
                Mathematics, Physics and Chemistry (MPC)
              </p>


              <p className="text-purple-300 mt-2">
                2021 - 2023
              </p>

            </div>





            {/* 10TH */}


            <div
              className="
              border-l-4 border-purple-500
              pl-6
              bg-white/5
              rounded-xl
              p-5
              "
            >

              <h4 className="text-xl font-bold">
                Secondary Education (10th)
              </h4>


              <p className="text-gray-300 mt-2">
                Secondary School Education
              </p>


              <p className="text-purple-300 mt-2">
                2020-2021
              </p>


            </div>



          </div>


        </div>


      </div>


    </section>
  );
}