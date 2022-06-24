import React from "react";
import Nav from "../Nav";
import Home from "../Home"
import Login from "../Login";
import Logout from "../Logout";
import UserProfile from "../UserProfile";

const Header = (props) => {
    const {
        pages = [],
        setCurrentPage,
        currentPage
      } = props;

      return (
        <header className="">
            <h1>
                <a href={<Home />}>Basement Dwellers</a>
            </h1>
            <Nav
                pages = {pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            {/* Search Bar */}
            <div>
                <input
                  className="searchBar"
                  type="text"
                  name="search"
                  placeholder="Search..."
                />
            </div>
            {/* These 2 Tabs are Login dependant */}
            <div>
              <Login />
              <Logout />
            </div>
        </header>
      )
    };

    export default Header;