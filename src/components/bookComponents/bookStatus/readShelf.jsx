import React, { Component } from "react"
import Book from "../book"

class Read extends Component {
  state = {}
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books
              .filter((book) => book.shelf === "read")
              .map((book) => (
                <li key={book.id}>
                  <Book
                    title={book.title}
                    thumbnail={book.imageLinks.thumbnail}
                    authors={book.authors}
                    books={this.props.books}
                    onSelect={this.props.onSelect}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Read
