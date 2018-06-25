import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookState from './BookState';

class BookList extends Component{
    static propTypes = {
        book: PropTypes.object.isRequired,
        updateShelf: PropTypes.func.isRequired
    };

     render(){
        const { book } = this.props;
        return(
            <div className="book" id={book.id}>
                <div className="book-top">
                    <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}>
                    </div>
                    <BookState
                        book={book}
                        updateShelf={this.props.updateShelf}/>
                </div>
                <div className="book-title">{book.name}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        )
    }
}

export default BookList;