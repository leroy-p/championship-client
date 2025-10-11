import { ApolloProvider } from '@apollo/client/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import { apolloClient } from './graphql/appolo-client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
