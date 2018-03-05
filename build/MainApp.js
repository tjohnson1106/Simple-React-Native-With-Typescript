import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
class MainApp extends Component {
    constructor() {
        super(...arguments);
        this.state = { name: "TS Example" };
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, { style: styles.text },
                "Hello this is a ",
                this.state.name)));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5fcff"
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    }
});
export default MainApp;
//# sourceMappingURL=MainApp.js.map