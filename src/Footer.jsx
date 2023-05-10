import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return <div className="footer">{date}</div>;
};

export default Footer;
