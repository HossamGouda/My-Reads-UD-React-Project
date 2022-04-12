import React, { Component } from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import * as BooksAPI from "./BooksAPI"
import BooksContainer from "./components/bookComponents/booksContainer"
import Search from "./pages/search"

class Main extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books }))
    })
  }
  handleshelf = (e) => {
    //set state
    this.setState({ shelf: e.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <Routes>
          <Route path="/search" element={<Search books={this.state.books} />} />
          <Route
            exact
            path="/"
            element={<BooksContainer books={this.state.books} />}
          />
        </Routes>
      </React.Fragment>
    )
  }
}

export default Main
