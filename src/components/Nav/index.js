import React, {useEffect} from "react";

const Nav = (props) => {
    const {
        pages = [],
        setCurrentPage,
        currentPage
    } = props;

    useEffect(() => {document.title = currentPage.display}, [currentPage])

    return (
        <nav>
            <ul className="">
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