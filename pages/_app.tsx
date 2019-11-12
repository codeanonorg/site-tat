import React from "react";
import App from "next/app";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../theme";
import { CssBaseline } from "@material-ui/core";
import { Head } from "next/document";

export default class MyApp extends App {
  componentDidMount() {
    const styles = document.querySelector("#jss-server-side");
    if (styles && styles.parentElement) styles.parentElement.removeChild(styles);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Tutorat Associatif Toulousain</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps}></Component>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
