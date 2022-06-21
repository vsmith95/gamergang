import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import LoLMain from "./components/LoLMain";
import ApexMain from "./components/LoLMain";
import Login from "./components/Login";

// Team should exist in footer probably

// import Team from "./components/Team";

// sections that may be moved to respective components
// import ApexHeros from './components/ApexHeros';
// import ApexProfile from "./components/ApexProfile";
// import ApexLB from "./components/ApexLB";
// import LoLChamps from "./components/LoLChamps";
// import LoLPofile from "./components/LoLProfile";
// import LoLLB from "./components/LoLLB";


function App() {
  const [pages] = useState([
    {
        name: "home",
        display: "Home",
        component: <Home />
    },
    {
        name: "lolMain",
        display: "League of Legends",
        component: <LoLMain />
    },
    {
        name: "apexMain",
        display: "Apex Legends",
        component: <ApexMain />
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
    }
]);

const [currentPage, setCurrentPage] = useState(pages[0]);

return (
    <div className="App">
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
