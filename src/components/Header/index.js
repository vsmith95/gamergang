import React from "react";
import Nav from "../Nav";

const Header = (props) => {
    const {
        pages = [],
        setCurrentPage,
        currentPage
      } = props;

      return (
        <header className="">
            <h1>
                <a class="title" href="/">Gamer Thing</a>
            </h1>
            <Nav
                pages = {pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            {/* Search Bar */}
            <input
                className="searchBar"
                type="text"
                name="search"
                placeholder="Search..."
            />
        </header>
      )
    };

    export default Header;