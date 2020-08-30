import React from "react";
import App from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "../src/ui/Theme";
import '../styles/layout.css';

export default class MyApp extends App {
  constructor(props) {
    super(props);

    this.state = { value: 0, selectedIndex: 0 };
  }

  setValue = index => {
    this.setState({ value: index });
  };

  setSelectedIndex = index => {
    this.setState({ selectedIndex: index });
  };

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <ThemeProvider theme={Theme}>
          <Component
            {...pageProps}
            setSelectedIndex={this.setSelectedIndex}
            setValue={this.setValue}
          />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
