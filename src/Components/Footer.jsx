import logo from "../assets/images/tmdblogo.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer-text">Nadia Minster {year}</p>
    </footer>
  );
};

export default Footer;
