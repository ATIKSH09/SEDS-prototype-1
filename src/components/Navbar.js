import React from "react";

function Navbar() {
  return (
    <div
      className="flex h-[18vh] md:justify-center sm:justify-center top-0 gap-x-5 fixed w-full bg-[#2F3334] p-3 pr-16 text-[#EEEEE6] justify-between
    items-center"
    >
      <div className="logo">
        <img
          src="https://seds-bphc.vercel.app/assets/images/seds_logo_w.png"
          alt="Logo"
        />
      </div>

      <div className="navs flex gap-x-10 md:hidden  text-3xl">
        <a className="hover:underline" href="https://github.com/ATIKSH09">
          Hyperion
        </a>
        <a className="hover:underline" href="https://github.com/ATIKSH09">
          Janus
        </a>
        <a className="hover:underline" href="https://github.com/ATIKSH09">
          Artemis
        </a>
        <a className="hover:underline" href="https://github.com/ATIKSH09">
          Archangel
        </a>
      </div>
    </div>
  );
}

export default Navbar;
