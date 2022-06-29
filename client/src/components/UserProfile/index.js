import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = () => {
    const { isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            // User Profile Container
            <section>
                {/* Sidebar for wishlist dispaly, Right side of the screen */}
                <div>
                    <div>
                        <h3>Your Wishlist</h3>
                        {/* wishlisted games */}
                        <div>
                            <ul>
                                <li>
                                    The Last of Us 3
                                </li>
                                <li>
                                    Half-Life 3
                                </li>
                                <li>
                                    Team Fortress 3(Now with an actual development team!!!)
                                </li>
                                <li>
                                    Pokemon Gun Version
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Possible review section (this user) */}
                    <div>
                        <p>This user's reviews should go here!</p>
                    </div>
                    {/* Favorited Categories? */}
                    <div>
                        <div>
                            <h3>Your Favorite Categories</h3>
                            <ul>
                                <li>
                                    Metroidvania
                                </li>
                                <li>
                                    MMO
                                </li>
                                <li>
                                    Free-To-Play
                                </li>
                            </ul>
                        </div>    
                    </div>
                </div>
            </section>
        )
    )
}

export default UserProfile;