import React, { Component } from "react"
import Book from "../book"

class WantToRead extends Component {
  state = {}
  render() {
    const { books, onSetshelf } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books
              .filter((book) => book.shelf === "wantToRead")
              .map((book) => (
                <li key={book.id}>
                  <Book
                    title={book.title}
                    thumbnail={
                      book.imageLinks && book.imageLinks.thumbnail
                        ? book.imageLinks.thumbnail
                        : ""
                    }
                    authors={book.authors}
                    book={book}
                    shelf={book.shelf}
                    bookList={books}
                    onSetshelf={onSetshelf}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default WantToRead
