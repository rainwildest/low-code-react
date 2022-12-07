import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import NextNprogress from "nextjs-progressbar";
import { initializeStore, StoreProvider } from "store";

import "styles/index.scss";
import "antd/dist/reset.css";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "/api"
});

const MyApp = ({ Component, pageProps, initialData }) => {
  const stores = initializeStore(initialData);

  return (
    <ApolloProvider client={client}>
      <StoreProvider value={stores}>
        <NextNprogress />
        <Component {...pageProps} />
      </StoreProvider>
    </ApolloProvider>
  );
};

MyApp.getInitialProps = async () => {
  const stores = initializeStore();
  // Gather serialization-friendly data from stores
  const initialData = {};

  // Send it to `render`
  return { stores, initialData };
};

export default MyApp;
