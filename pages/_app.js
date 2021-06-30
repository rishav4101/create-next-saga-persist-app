import "../styles/globals.css";
import React from "react";
import App from "next/app";
import { wrapper } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ReactReduxContext } from "react-redux";

class MyApp extends App {
  constructor(props) {
    super(props);
  }

  // Getting Initial props.
  static getInitialProps = async ({ Component, ctx }) => {
    const pageProps = {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    };

    return {
      pageProps,
    };
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ReactReduxContext.Consumer>
        {({ store }) => (
          <PersistGate
            persistor={store.__PERSISTOR}
            loading={<div>Loading</div>}
          >
            <Component {...pageProps} />
          </PersistGate>
        )}
      </ReactReduxContext.Consumer>
    );
  }
}

export default wrapper.withRedux(MyApp);
