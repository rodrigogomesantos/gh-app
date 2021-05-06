import "./App.scss";
import React from "react";

import "./components/FontwasomeIcons";

import Drawer from "./components/Drawer";
import Ideas from "./view/Ideas"

export default (props) => (
  <div className="App">
 
    <Drawer>
      <Ideas/>
    </Drawer>
   
  </div>
);
