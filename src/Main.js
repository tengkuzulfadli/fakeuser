import React from "react";
import { render } from "react-dom";
import './Main.css';
import App from "./App";

let targetElement = document.querySelector("#app");

render(<App />, targetElement);