import React from "react";
import ReactDOM from "react-dom";
import {Normalize} from "styled-normalize";
import App from "./App";
import "./index.css";

const Root = () => (
    <React.Fragment>
        <Normalize/>
        <App/>
    </React.Fragment>
);

ReactDOM.render(<Root/> , document.getElementById("root"));