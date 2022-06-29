import React from "react";
import UserProfile from "../UserProfile";

const Home = () => {
    return (
    <section className="home">
        <div>
            <h1 class="intro">Welcome to the Basement</h1>
            <h1 class="intro2">Reccomended Games</h1>
            <div className="teamMembers">
                <p>placeholder</p>
            </div>
            <>
                <UserProfile />
            </>
        </div>
    </section>
    )
}

export default Home;