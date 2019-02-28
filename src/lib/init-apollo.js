import { ApolloClient, InMemoryCache } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";

import fetch from "isomorphic-unfetch";
import { getToken as getTokenHelper } from "./helpers";

let apolloClient = null;

if (!process.browser) global.fetch = fetch;

function create(initialState, { getToken = getTokenHelper() } = {}) {
  const httpLink = createHttpLink({
    uri: "http://localhost:4000",
    credentials: "same-origin"
  });

  const authLink = setContext((_, { headers }) => {
    const token = getToken();
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ""
      }
    };
  });

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {})
  });
}

export default function initApollo(initialState, options) {
  if (!process.browser) return create(initialState);

  if (!apolloClient) apolloClient = create(initialState, options);
  return apolloClient;
}
