import React from "react";
import { AppRegistry } from "react-native";

import MainApp from "./build/MainApp";

const RNtypescript = () => <MainApp />;

AppRegistry.registerComponent("rntypescript", () => RNtypescript);

// import React, { Component } from "react";

// import MainApp from "./src/MainApp";

// export default class App extends Component {
//   render() {
//     return <MainApp />;
//   }
// }
