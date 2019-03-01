import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/with-apollo-client";

class CPZApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <div className="container-fluid">
            <div id="main-container">
              <Component {...pageProps} />
            </div>
          </div>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(CPZApp);