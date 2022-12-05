import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import NextNprogress from "nextjs-progressbar";
import "styles/index.scss";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "/api"
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <NextNprogress />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
