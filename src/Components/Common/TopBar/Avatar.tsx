import React from "react";

const Avatar: React.FC = () => {
    return <div id="avatar_cont">
        <img src="/images/avatar.png" alt="avatar" />
        <div id="avatar_info">
            <span id="avatar_info_username">Ahmed Ali</span>
            <span id="avatar_info_role">Student</span>
        </div>
    </div>;
};

export default Avatar;