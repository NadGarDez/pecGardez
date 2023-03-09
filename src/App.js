import './App.css';
import { MainScreen } from './screens/MainScreen';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://api.8base.com/clf0erdbe02bt09l99ouc895u",
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
