import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Game from "./components/Game";
import Team from "./components/Team";
import { useAuth0 } from "@auth0/auth0-react"
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
        {
            name: "team",
            display: "Meet The Team",
            component: <Team />
        },
    ]);

    const [currentPage, setCurrentPage] = useState(pages[0]);

    const { isLoading } = useAuth0();

    if (isLoading) return <div>Loading...</div>

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
