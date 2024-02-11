import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { RouterPaths } from './routes';

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

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <RouterPaths />
    </ApolloProvider>
  );
}

export default App;
