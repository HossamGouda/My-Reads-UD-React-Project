import React, { Component } from "react"
import { Link } from "react-router-dom"
import Book from "../components/bookComponents/book"
import * as BooksAPI from "../BooksAPI"
class Search extends Component {
  state = {
    query: "",
    queryBooks: [],
    errors: "",
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim(),
    }))
    if (query.length > 0) {
      this.search(query)
    } else {
      this.setState({ queryBooks: [] })
    }
  }

  clearQuery = () => {
    this.updateQuery("")
  }

  search = async (query) => {
    await BooksAPI.search(query)
      .then((books) => {
        if (books.length > 0) {
          this.setState({ queryBooks: books })
        } else {
          this.setState({ queryBooks: [] })
        }
      })
      .catch((error) => {
        this.setState({
          queryBooks: [],
          errors: "Unfortunitly the we did not find results in our database",
        })
      })
  }

  render() {
    const { query } = this.state
    const { queryBooks, errors } = this.state
    const showingBooks = queryBooks.filter((b) =>
      b.title.toLowerCase().includes(query.toLowerCase())
    )
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
              value={query}
              onChange={(e) => {
                this.updateQuery(e.target.value)
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          {errors.length > 0 ? (
            `<h1>${errors}</h1>`
          ) : (
            <ol className="books-grid">
              {showingBooks.map((book) => (
                <li key={book.id}>
                  <Book
                    title={book.title}
                    thumbnail={book.imageLinks.thumbnail}
                    authors={book.authors}
                  />
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    )
  }
}

export default Search
