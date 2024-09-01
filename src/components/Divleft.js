import React from "react";

function Divleft(props) {
  return (
    <div data-aos="fade-in" className="flex md:flex-col md:gap-y-12  bg-[#EEEEE6] justify-center gap-x-12 items-center h-[82vh]  ">
      <div className="img">
        <img className="w-[40vw] xl:w-[50vw]" src={props.url} alt={props.title} />
      </div>

      <div className="texts w-[30%] md:w-[60%] flex flex-col gap-y-4 sm:gap-y-3 md:gap-y-12 justify-center items-center">
        <p className="text-xl sm:text-base">
          <b className="text-6xl md:text-xl">{props.title}</b> {props.desc}
        </p>

        <button
          className="border px-10 py-2 rounded-full hover:bg-black hover:text-[#EEEEE6] duration-500 text-2xl border-black
        "
        >
          <a href="https://github.com/ATIKSH09">Explore</a>
        </button>
      </div>
    </div>
  );
}

export default Divleft;
