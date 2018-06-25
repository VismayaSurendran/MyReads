import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route} from 'react-router-dom'
import './App.css'
import { Link } from 'react-router-dom'

import SearchBooks from './files/SearchBooks'
import BooksShelf from './files/BooksShelf'

class BooksApp extends React.Component {
  state = {
    books:[],
    filtered:[]
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        this.setState({books})
      });
  }

//search for books
  searchforBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((books) => {
          if (books.length) {
           books.forEach((book,index)=>{
           	let thisBook=this.state.books.find((e)=>e.id===book.id);
           	book.shelf=thisBook?thisBook.shelf:'none';
           	books[index]=book;
           }); 
          
          this.setState({filtered: books});
        }
    });
    } 
    else {
      this.setState({filtered: []});
    }
  };
   
//update the shelfs
  updateShelf = (book, shelfs) => {
    BooksAPI.update(book, shelfs).then(()=>{
    	book.shelf=shelfs;

        this.setState(state=>({books: state.books.filter(e=> e.id !==book.id).concat([book])}));

      });
  };

getBooks(name){
	return this.state.books.filter((e)=>e.shelf===name)
}
  

    


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>

              <BooksShelf 
                 title="Currently Reading"
                 books={this.getBooks("currentlyReading")}
                 updateShelf={this.updateShelf} />

               <BooksShelf 
                 title="Want to Read"
                 books={this.getBooks("wantToRead")}
                 updateShelf={this.updateShelf} />
                   
               <BooksShelf 
                 title="Read"
                 books={this.getBooks("read")}
                 updateShelf={this.updateShelf} />
                 </div>
                 </div>                             
                 
            <div className="open-search">
              <Link to="/search">Add a book< /Link>
              </div> 
              </div>
        )}/>
        <Route path="/search" render={({ history }) => (
           <SearchBooks
             books={this.state.filtered}
             searchforBooks={this.searchforBooks}
             updateShelf={this.updateShelf} />      
    )} />
    </div>
    )
  }
}

export default BooksApp
