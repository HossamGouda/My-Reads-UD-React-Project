import React, { Component } from "react"
import Book from "../book"

class CurrentlyRead extends Component {
  state = {}
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books
              .filter((book) => book.shelf === "currentlyReading")
              .map((book) => (
                <li key={book.id}>
                  <Book
                    title={book.title}
                    thumbnail={book.imageLinks.thumbnail}
                    authors={book.authors}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default CurrentlyRead
