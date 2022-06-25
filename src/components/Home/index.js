import React from "react";
import UserProfile from "../UserProfile";

const Home = () => {
    return (
    <section className="home">
        <div>
            <h1>Welcome to the Basement</h1>
            <>
                <UserProfile />
            </>
        </div>
    </section>
    )
}

export default Home;