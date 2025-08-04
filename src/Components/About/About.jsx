import React from "react";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/Profile_Logo.JPG"; // make sure the path is correct

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Syeda Shahbano Atif
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#50C878] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              options={{
                strings: [
                  "Fullstack Developer",
                  "App Developer",
                  "UI/UX Designer",
                  "Coder",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
              }}
            />
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a dedicated Full-Stack Developer with strong expertise in both
            front-end and back-end development. With a solid foundation in
            programming, web development, and artificial intelligence, I am
            passionate about building efficient, user-friendly, and innovative
            digital solutions. I am seeking a challenging role where I can apply
            my skills, contribute to impactful projects, and continue to grow my
            expertise while adding value to the organization.
          </p>
          <a
            href="https://drive.google.com/file/d/1nk9xC3_hNbGQD7cjVpAbBtm8LopZfZDS/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #0D98BA, #50C878)",
              boxShadow:
                "0 0 2px #50C878, 0 0 2px #0D98BA, 0 0 40px #50C878",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-green-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Syeda Shahbano Atif"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(13,152,186,1)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
