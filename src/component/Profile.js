import React, { Component } from "react";
import logo from "../logo.svg";
import ProfileData from "./ProfileData";

class Profile extends Component {
    state = {};
    render() {
        return (
            <div className="content">
                <h1>xxxx</h1>
                <img src={logo} alt="logo" />

                <ProfileData />
            </div>
        );
    }
}

export default Profile;
