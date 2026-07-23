export default function ThankYou() {
  return (
    <section
      className="
      relative
      min-h-[60vh]
      flex
      items-center
      justify-center
      overflow-hidden
      bg-gradient-to-br
      from-black
      via-purple-950
      to-black
      px-6
      "
    >


      {/* Background Glow */}

      <div
        className="
        absolute
        w-72
        h-72
        bg-purple-600/30
        rounded-full
        blur-3xl
        top-10
        left-10
        "
      />


      <div
        className="
        absolute
        w-72
        h-72
        bg-blue-500/20
        rounded-full
        blur-3xl
        bottom-10
        right-10
        "
      />





      {/* CONTENT CARD */}

      <div
        className="
        relative
        max-w-4xl
        w-full
        text-center
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        rounded-3xl
        px-8
        py-14
        shadow-2xl
        "
      >



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
          mb-6
          "
        >
          Thanks for Visiting ✨
        </h2>




        <p
          className="
          text-gray-300
          text-lg
          sm:text-xl
          leading-relaxed
          max-w-2xl
          mx-auto
          "
        >
          Thank you for exploring my portfolio.
          I appreciate your time and interest in my work.
          I am always excited to learn, build innovative solutions,
          and connect with new opportunities.
        </p>





        <div
          className="
          mt-10
          inline-flex
          items-center
          gap-3
          px-8
          py-3
          rounded-full
          bg-purple-600/20
          border
          border-purple-400/30
          text-purple-200
          font-semibold
          "
        >

          <span>
            🚀
          </span>

          Let's Create Something Amazing Together

        </div>




        <p
          className="
          mt-8
          text-purple-300
          font-semibold
          text-lg
          "
        >
          — Deevi Lathasri
        </p>



      </div>



    </section>
  );
}