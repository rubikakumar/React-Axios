import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-5 bg-dark">
      <div className="container text-center">
        <p className="m-0 text-white">
          Copyright{" "}
          <Link to={"mailto:rubika151298@gmail.com"} className="text-white fw-bold">
            © rubika151298@gmail.com
          </Link>{" "}
          {currentYear}
        </p>
        <div className="mt-3">
          <Link to="/privacy-policy" className="text-white mx-2">
            Privacy Policy
          </Link>
          |
          <Link to="/terms-of-service" className="text-white mx-2">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
