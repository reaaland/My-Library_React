import Header from "../Components/Header";
import Highlights from "../Components/Highlights";
import Features from "../Components/Features";
import RecentBooks from "../Components/RecentBooks";
import Explore from "../Components/Explore";


import React from "react";

const Home = () => {
    return (
    <>
        <Header />
        <Highlights />
        <Features />
        <RecentBooks />
        <Explore />
    </>
    );
}

export default Home;