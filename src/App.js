import React, { Component } from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import * as BooksAPI from "./BooksAPI"
import BooksContainer from "./components/bookComponents/booksContainer"
import Search from "./pages/search"

class App extends Component {
  state = {
    books: [],
    query: "",
    queryBooks: [],
    errors: "",
  }

  handleSearch = async (event) => {
    try {
      if (event.length > 0) {
        await this.setState({ query: event.trim().toLowerCase() })
        await BooksAPI.search(this.state.query).then((books) => {
          const withShelfValues = books.map((book) => {
            this.state.books.map((localBook) => {
              if (book.id === localBook.id) {
                book.shelf = localBook.shelf
              }
              return book
            })
            return
          })
          console.log(books)
          if (books.length > 0) {
            this.setState({ queryBooks: withShelfValues })
            console.log("query books", this.state.queryBooks)
          } else {
            this.setState({ queryBooks: [] })
          }
        })
      } else {
        this.setState({ queryBooks: [] })
        this.setState({ query: "" })
      }
    } catch (error) {
      this.setState({ errors: error })
      console.log(`This is Error from Search term :${error}`)
    }
    return
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books }))
    })
  }

  handleShelf = async (book, shelf) => {
    try {
      await BooksAPI.update(book, shelf)
      await BooksAPI.getAll().then((books) => {
        this.setState(() => ({ books }))
        if (shelf === "none") {
          this.setState((currentState) => ({
            books: currentState.books.filter((b) => b.id !== book.id),
          }))
        } else {
          book.shelf = shelf
          this.setState((currentState) => ({
            books: currentState.books
              .filter((b) => b.id !== book.id)
              .concat(book),
          }))
        }
      })
    } catch (error) {
      this.setState({ errors: error })
      console.log(`This is Error from Shelf changing :${error}`)
    }
  }

  render() {
    return (
      <React.Fragment>
        <Routes>
          <Route
            path="/search"
            element={
              <Search
                books={this.state.books}
                queryBooks={this.state.queryBooks}
                onSearch={this.handleSearch}
                setShelf={this.handleShelf}
              />
            }
          />
          <Route
            exact
            path="/"
            element={
              <BooksContainer
                books={this.state.books}
                book={this.state.books.map((book) => book)}
                setShelf={this.handleShelf}
              />
            }
          />
        </Routes>
      </React.Fragment>
    )
  }
}

export default App
