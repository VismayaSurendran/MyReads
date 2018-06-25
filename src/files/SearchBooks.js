import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookList from './BookList'

 class SearchBooks extends Component {

  static propTypes={
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  };

  componenWillUnmount(){
    this.props.searchforBooks(" ");
  }
//resets
  searchforBooks=(query)=>{
    this.props.searchforBooks(query.trim());
  };
  
  render(){
    return (
    	<div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/"> Close </Link>
              <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author"  onChange={(e) => this.searchforBooks(e.target.value)}/>
              </div>
             </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.props.books.map((book) => (
                 <li key={book.id} className="item">
                     <BookList
                       updateShelf={this.props.updateShelf}
                       book={book} />
                         </li>
                        ))
                      }
                   </ol>
            </div>
          </div>
          )
      }
  }

  export default SearchBooks;