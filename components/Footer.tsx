import React from "react";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="mb-1.4 w-screen flex justify-center text-xl md:text-2xl select-none mt-4">
      © {getYear()}
      <p>
        &nbsp; <a href="https://github.com/CitizenCathay">Choi Meng Yew</a>
      </p>
    </footer>
  );
};

export default Footer;
