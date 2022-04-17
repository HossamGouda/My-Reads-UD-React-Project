import React, { Component } from "react"
import { Link } from "react-router-dom"
import Book from "../components/bookComponents/book"
// import * as BooksAPI from "../BooksAPI"
class Search extends Component {
  render() {
    const { onSearch, queryBooks, setShelf } = this.props
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {queryBooks.map((book) => (
              <Book
                key={book.id}
                title={book.title}
                thumbnail={
                  book.imageLinks && book.imageLinks.thumbnail
                    ? book.imageLinks.thumbnail
                    : ""
                }
                authors={book.authors}
                book={book}
                shelf={book.shelf}
                onSetshelf={setShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
