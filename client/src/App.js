import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Search from "./components/Search";
import Game from "./components/Game";
import Team from "./components/Team";
import { useAuth0 } from "@auth0/auth0-react";
import Browse from "./components/Browse";
const App = () => {
  const [pages] = useState([
    {
      name: "home",
      display: "Home",
      component: <Home />,
    },
    // Remove "game" block once Search or other means of reaching the game page are enabled
    {
      name: "game",
      display: "Game",
      component: <Game />,
    },
    {
      name: "browse",
      display: "Browse",
      component: <Browse />,
    },
    {
      name: "team",
      display: "Meet The Team",
      component: <Team />,
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Header
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <main>{currentPage.component}</main>
      <Footer />
    </div>
  );
};

export default App;
