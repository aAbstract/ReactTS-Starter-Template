import React from "react";

// fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const TopBarControls: React.FC = () => {
    return <div id="top_bar_controls">
        <FontAwesomeIcon icon={faBolt} />
        <FontAwesomeIcon icon={faFolder} />
        <FontAwesomeIcon icon={faBell} />
    </div>;
};

export default TopBarControls;