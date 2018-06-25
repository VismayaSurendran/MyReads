import React, { Component } from 'react'
import { PropTypes }  from 'prop-types'

class BookState extends Component{

	static propTypes={

		updateShelf: PropTypes.func.isRequired,
		book: PropTypes.object.isRequired
	};

	state={
		thisShelf: this.props.book.shelf,
		change:false
	};

componentWillReceiveProps(){
        
        this.setState({
            change: false
        });
    }
    
updateShelf = (e) => {
        this.props.updateShelf(this.props.book, e.target.value);
        this.setState({
            thisShelf: e.target.value,
            change: true
        });
    };



render(){
	return(
           
           <div className="book-shelf-changer">
            <select value={this.state.thisShelf} onChange={this.updateShelf}>
		    <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
             <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
               <option value="none">None</option>
                </select>
                
                
             )
         }
                 
     }

export default BookState;