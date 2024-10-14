import React from "react";

const About = () => {
  return (
    <>
      <div name='About' className="max-w-screen-2xl container mx-auto px-4 md:px-10 my-10">
        <div>
          <h1 className="text-3xl font-bold mb-5">About</h1>
          <p className="text-justify">
            Hello, I'm Piyush, a passionate Web developer with a keen eye for
            MERN Stack . With a background in IT, I strive to create impactful
            and visually stunning Software solutions that leave a lasting
            impression.
          </p>
          <br />
          <h1 className="text-green-500 font-semibold text-xl">
            Education & Training
          </h1>
          <span className="text-justify">
            BSC.IT, Saurashtra University, 2017 & Web Develpoing, SkillQode
            Institute - Surat, 2024
          </span>
          <br />
          <br />
          <h1 className="text-green-500 font-semibold text-xl">
            Skills & Expertise
          </h1>
          <span className="text-justify">
            Proficient in C Language, C++, JavaScript Experienced with VS Code, Git & GitHub Strong grasp of PhotoShop Excellent problem-solving skills Effective communicator and collaborator
          </span>
          <br />
          <br />
          <h1 className="text-green-500 font-semibold text-xl">
            Mission Statement
          </h1>
          <p className="text-justify">
            My mission is to leverage my skills and creativity to deliver
            innovative Information Technology solutions that exceed client expectations
            and contribute positively to the digital landscape. I am committed
            to continuous learning and growth, always seeking new challenges and
            opportunities to expand my horizons.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
