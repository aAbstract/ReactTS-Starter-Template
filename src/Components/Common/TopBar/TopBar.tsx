// framework
import React from "react";

import '../../../Styles/Common/TopBar/TopBar.css';

// UI components
import SearchBox from "./SearchBox";
import Avatar from "./Avatar";
import TopBarControls from "./TopBarControls";

const TopBar: React.FC = () => {
    return <div id="top_bar_cont">
        <img src="/images/lt_logo.png" alt="lt_logo" />
        <SearchBox />
        <div id="top_bar_right_sec">
            <TopBarControls />
            <Avatar />
        </div>
    </div>;
};

export default TopBar;