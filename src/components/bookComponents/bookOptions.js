import React, { Component } from "react"
class Options extends Component {
  state = {}
  changeListener = (e) => {
    const book = this.props.book
    this.props.onSetshelf(book, e.target.value)
  }
  render() {
    return (
      <select onChange={this.changeListener} value={this.props.shelf}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    )
  }
}

export default Options
