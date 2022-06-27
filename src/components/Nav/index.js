import React, {useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UserProfile from "../UserProfile";

const Nav = (props) => {
    const { isAuthenticated } = useAuth0();
    const {
        pages = [],
        setCurrentPage,
        currentPage
    } = props;

    useEffect(() => {document.title = currentPage.display}, [currentPage])

    return (
        <nav>
            <ul className="pageButtons">
                {pages.map((page) => (
                    <p className={`${page.name===currentPage.name && "navActive"}`} key={page.name} onClick={() => {setCurrentPage(page)}}>
                        {page.display}
                    </p>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;