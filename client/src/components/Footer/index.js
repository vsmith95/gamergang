import React from "react";

const Footer = (props) => {
    const {
        pages = [],
        setCurrentPage,
        currentPage
      } = props;

      return (
        <footer className="githubLink">
            <a href="">GitHub</a>
        </footer>
      );
    };

    export default Footer;