/* eslint-disable prettier/prettier */

import Blogs from "./Blogs/Blogs"
import About from "./Sections/About"
import GetInTouch from "./Sections/GetInTouch"
import Hero from "./Sections/Hero"
import Projects from "./Sections/Projects"
import Worked from "./Sections/Worked"

// import { Meteors } from "@/src/components/UI/Aceternity/meteros"

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Worked />
      <Projects />
      <Blogs/>
      <GetInTouch />
      {/* <Meteors number={20} /> */}
    </>
  )
}

export default Home