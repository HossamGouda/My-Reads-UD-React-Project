import React, { Component } from "react"
import Read from "./bookStatus/readShelf"
import WantToRead from "./bookStatus/wantRead"
import CurrentlyRead from "./bookStatus/CurrentlyRead"
import OpenSearch from "./openSearch"
import propTypes from "prop-types"

class BooksContainer extends Component {
  static propTypes = {
    books: propTypes.array.isRequired,
  }

  render() {
    return (
      <React.Fragment>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {console.log(this.props.books)}
            <Read books={this.props.books} />
            <WantToRead books={this.props.books} />
            <CurrentlyRead books={this.props.books} />
            <div />
          </div>
          <OpenSearch />
        </div>
      </React.Fragment>
    )
  }
}

export default BooksContainer
