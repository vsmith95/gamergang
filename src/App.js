import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Categories from "./components/Categories";
import Game from "./components/Game";
import Login from "./components/Login";
import Team from "./components/Team";

const App = () => {
    const [pages] = useState([
        {
            name: "home",
            display: "Home",
            component: <Home />
        },
        // Remove "game" block once categories or other means of reaching the game page are enabled
        {
            name: "game",
            display: "Game",
            component: <Game />
        },
        {
            name: "categories",
            display: "Categories",
            component: <Categories />
        },
        // Log in and Profile should be contingent on where the user is logged in or not
        // if logged out, display log in
        // if logged in, display profile
        // we can handle this once we have a logged in state set up
        {
            name: "login",
            display: "Log-in",
            component: <Login />
        },
        {
            name: "userProfile",
            display: "Profile",
            component: <UserProfile />
        },
        {
            name: "team",
            display: "Meet The Team",
            component: <Team />
        }
    ]);

    const [currentPage, setCurrentPage] = useState(pages[0]);

    return (
        <div>
            <Header
            pages={pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            />
            <main>
                {currentPage.component}
            </main>
            <Footer />
        </div>
    );

}

export default App;
