import React from "react";
import pdf from "../assets/Piyush Suhagiya Resume - SkillQode.pdf"

const Resume = () => {
  return (
    <>
      <div name='Resume' className="max-w-screen-2xl container mx-auto px-4 md:px-10 my-10">
        <h2 className="text-3xl font-bold mb-5">Resume</h2>
        <div class="cv">
          <a
            href={pdf}
            download="Piyush-Resume"
            role="button"
            className="border-[1px] px-2 py-1 rounded bg-white"
            onClick={(e)=>{
              window.open(pdf,"_blank")
            }}
          >
            Download CV
          </a>
        </div>{" "}
      </div>
    </>
  );
};

export default Resume;
