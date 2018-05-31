import { gql } from 'apollo-boost'

const getAuthorQuery = gql`
  {
    authors {
      name
      age
      id
    }
  }
`

const getBooksQuery = gql`
  {
    books {
      name
      id
      author {
        name
        age
      }
    }
  }
`

const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
      author {
        name
        age
      }
    }
  }
`

const getBookQuery = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`

export { getAuthorQuery, getBooksQuery, addBookMutation, getBookQuery }
