import React from "react";
import Nav from "../Nav";
import Home from "../Home";
import Login from "../Login";
import Logout from "../Logout";

const Header = (props) => {
  const { pages = [], setCurrentPage, currentPage } = props;

  return (
    <header className="">
      <h1>
        <a class="title" href={<Home />}>
          Basement Dwellers
        </a>
      </h1>
      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      {/* Search Bar
      <div>
        <Search />
      </div> */}
      {/* These 2 Tabs are Login dependant */}
      <div>
        <Login />
        <Logout />
      </div>
    </header>
  );
};

export default Header;
