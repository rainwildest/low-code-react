import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import NextNprogress from "nextjs-progressbar";
import { initializeStore, StoreProvider } from "store";

import "antd/dist/reset.css";
import "styles/index.scss";
import "styles/tailwindcss.scss";

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
