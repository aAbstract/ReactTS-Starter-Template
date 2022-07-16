import React from "react";

// fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBox: React.FC = () => {
    return <div id="search_box_cont">
        <input type="text" placeholder="Search..." />
        <button><FontAwesomeIcon icon={faSearch} /></button>
    </div>;
};

export default SearchBox;