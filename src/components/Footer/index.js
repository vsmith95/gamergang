import React from "react";

const Footer = (props) => {
    const {
        pages = [],
        setCurrentPage,
        currentPage
      } = props;

      return (
        <footer className="">
            <a href="">GitHub</a>
        </footer>
      );
    };

    export default Footer;