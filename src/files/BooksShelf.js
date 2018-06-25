import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookList from './BookList';

class BooksShelf extends Component{	
	static propTypes={
		books: PropTypes.array.isRequired,
		updateShelf: PropTypes.func.isRequired,
		title: PropTypes.string.isRequired
	};


	render(){
		return(
			<div className="bookshelf">
             <h2 className="bookshelf-title">{this.props.title}</h2>
             <div className="bookshelf-books">
             <ol className="books-grid">{this.props.books.map((book) => (
                <li key={book.id} className="item">
                  <BookList
                   updateShelf={this.props.updateShelf}
                   book={book} />
                 </li>))}
             </ol>
             </div>
             </div>
         )
	}
             
	}

	export default BooksShelf;
