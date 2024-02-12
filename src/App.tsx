import './App.css';
import { ApolloProvider } from '@apollo/client';
import { RouterPaths } from './routes';
import apolloClient from './services/apolloClient';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <RouterPaths />
    </ApolloProvider>
  );
}

export default App;
