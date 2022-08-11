import React from "react";
import "./App.css";
import Profile from "./component/Profile";

class App extends React.Component {
    state = {
        user: {
            name: "Lisa",
            age: 8,
        },
    };

    render() {
        return (
            <div>
                <Profile />
            </div>
        );
    }
}
export default App;
