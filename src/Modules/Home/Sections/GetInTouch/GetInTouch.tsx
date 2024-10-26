/* eslint-disable prettier/prettier */
import { motion } from 'framer-motion';

import Button from "@/src/components/Button";

const GetInTouch = () => {
  const content =
    "Thank you for taking the time to explore my portfolio! If you have any questions, want to collaborate, or just want to say hello, I'd be happy to hear from you.";

  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }} 
      className="container text-center"
      id="contact"
      initial={{ opacity: 0, y: 20 }} 
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 text-md justify-center font-normal text-sky-400"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }} 
      >
        <span className="font-mono">04. </span>
        What next?
      </motion.h1>

      <motion.h1
        animate={{ opacity: 1, y: 0 }}
        className="font-medium text-slate-300 text-4xl text-center mt-5"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }} 
      >
        Get In Touch
      </motion.h1>

      <motion.p
        animate={{ opacity: 1, y: 0 }}
        className="text-slate-400 max-w-2xl mx-auto my-3"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.6 }} 
      >
        {content}
      </motion.p>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.8 }} 
        className='text-center flex justify-center items-center'
      >
        <Button 
          label="Say Hello 👋" 
         // Smooth transition for hover effect
        />
      </motion.div>
    </motion.section>
  );
};

export default GetInTouch;
