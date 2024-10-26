/* eslint-disable prettier/prettier */

import Left from "./partials/Left";
import Right from "./partials/Right";
import Skills from "./partials/Skills";

const About = () => {
  return (
    <section className="container" id="about">
      <p className="text-4xl md:text-5xl font-medium font-display  text-black dark:text-sky-400 md:leading-[5rem]">About me</p>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 md:gap-x-10 lg:gap-x-20 mt-5">
        <Left />
        <Right />
      </div>

      <Skills />
    </section>
  );
};

export default About;


{/* <GradualSpacing
  className="text-4xl md:text-5xl font-medium font-display -tracking-widest text-black dark:text-sky-400 md:leading-[5rem]"
  text="About me"
/>  */}