import React, { Component } from "react";
import Read from "./bookStatus/readShelf";
import WantToRead from "./bookStatus/wantRead";
import CurrentlyRead from "./bookStatus/CurrentlyRead";
import OpenSearch from "./openSearch";
import propTypes from "prop-types";

class BooksContainer extends Component {
  static propTypes = {
    books: propTypes.array.isRequired,
  };

  render() {
    const { books, controlChelf } = this.props;
    return (
      <React.Fragment>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {console.log(books)}
            <CurrentlyRead books={books} controlChelf={controlChelf} />
            <Read books={books} controlChelf={controlChelf} />
            <WantToRead books={books} controlChelf={controlChelf} />

            <div />
          </div>
          <OpenSearch />
        </div>
      </React.Fragment>
    );
  }
}

export default BooksContainer;
