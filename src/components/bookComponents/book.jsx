import React, { Component } from "react"
import Options from "./bookOptions"
class Book extends Component {
  // changeListener = (e) => {
  //   const book = this.props.book
  //   this.props.onSetshelf(book, e.target.value)
  // }
  render() {
    const { shelf, title, authors, thumbnail, onSetshelf } = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: thumbnail ? `url(${thumbnail})` : "url()",
            }}
          />
          <div className="book-shelf-changer">
            {/* <select onChange={this.changeListener} value={shelf}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select> */}
            <Options
              shelf={shelf}
              onSetshelf={onSetshelf}
              book={this.props.book}
            />
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    )
  }
}

export default Book
