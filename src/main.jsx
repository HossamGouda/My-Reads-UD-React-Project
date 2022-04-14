import React, { Component } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BooksContainer from "./components/bookComponents/booksContainer";
import Search from "./pages/search";

class Main extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books }));
    });
  }

  handleshelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((book) => book.shelf);
    this.setState({ books: book.shef });
  };

  render() {
    return (
      <React.Fragment>
        <Routes>
          <Route path="/search" element={<Search books={this.state.books} />} />
          <Route
            exact
            path="/"
            element={
              <BooksContainer
                books={this.state.books}
                controlChelf={(book, shef) => this.handleshelf(book, shef)}
              />
            }
          />
        </Routes>
      </React.Fragment>
    );
  }
}

export default Main;
