/* eslint-disable prettier/prettier */

import Button from "@/src/components/Button";

const GetInTouch = () => {
  const content =
    "Thank you for taking the time to explore my portfolio! If you have any questions, want to collaborate, or just want to say hello, I'd be happy to hear from you.";

  return (
    <section className="text-center my-4" id="contact">
      <h1 className="flex items-center gap-2 text-md justify-center font-normal text-sky-400">
        <span className=" font-mono">04. </span>
        What next?
      </h1>

      <h1 className="font-medium text-slate-300 text-4xl text-center mt-5">
        {" "}
        Get In Touch{" "}
      </h1>

      <p className="text-slate-400 max-w-2xl mx-auto my-3">
        {content}
      </p>

      <Button label="Say Hello 👋" />
    </section>
  );
};

export default GetInTouch;
