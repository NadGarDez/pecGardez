import './App.css';
import { MainScreen } from './screens/MainScreen';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { eightBaseUrl } from './constants/settings';

const client = new ApolloClient({
  uri: eightBaseUrl,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <MainScreen />
    </ApolloProvider>
  );
}

export default App;
