import { ApolloClient, InMemoryCache } from '@apollo/client';

const { VITE_GITHUB_TOKEN: TOKEN, VITE_GITHUB_BASE_URL: BASE_URL } = import.meta
  .env;

const apolloClient = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `bearer ${TOKEN}`,
  },
});

export default apolloClient;
