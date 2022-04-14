import React, { Component } from "react";
import * as BooksAPI from "../../BooksAPI";

class Book extends Component {
  state = { value: "" };

  setShelf = async (e) => {
    const shelf = e.target.value;
    const books = this.props;
    const res = await BooksAPI.update(books, shelf);
    console.log(res);
  };

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${this.props.thumbnail})`,
            }}
          />
          <div className="book-shelf-changer">
            <select onChange={this.setShelf}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.authors}</div>
      </div>
    );
  }
}

export default Book;
