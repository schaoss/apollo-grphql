import React, { Component } from 'react'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
// import fetch from 'isomorphic-fetch'

import BookList from './components/BookList'
import AddBook from './components/AddBook'

// if (!process.browser) {
//   global.fetch = fetch
// }

const link = new HttpLink({
  uri: 'http://127.0.0.1:4000/graphql',
  credentials: 'same-origin',
})
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  // ssrMode: !process.browser,
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1> Reading List </h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    )
  }
}

export default App
