import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://championship-server.onrender.com/graphql',
    // uri: 'http://localhost:3000/graphql',
  }),
  cache: new InMemoryCache(),
})
