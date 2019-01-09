import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HeadingNavBar from './heading.js';
import Books from './book/books';
import Authors from './author/authors';
import urls from '../config/urls';
import BookForm from './book/bookForm';
import AuthorForm from './author/authorForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: null,
      authors: null,
      showBookForm: false,
      showAuthorForm: false,
      updateBook: false,
      updateAuthor: false
    }
  }

getBookData = async () => {
  const url = urls.bookurl;
  let dbData;
  try {
    const response = await fetch(url, {mode: 'cors'});
    dbData = await response.json(); 
  } catch (error) {
    console.log('error happend');
  }
  this.setState({ books: dbData });
}

getAuthorData = async () => {
  const url = urls.authorurl;
  let dbData;
  try {
    const responce = await fetch(url, {mode: 'cors'});
    dbData = await responce.json(); 
  } catch (error) {
    console.log('error happend');
  }
  this.setState({ authors: dbData });
}

// to handle events in book page 
// --------start---------------------------------------
handleEditBook = (data) => {
  this.setState({showBookForm: true, updateBook: true, book: data });
}

handleDeleteBook = (isbn) => {
  console.log(isbn);
  console.log('delete book clicked');
}

handleAddBook = () => {
  this.setState({showBookForm: true});
}

handleBookDiscard = () => {
  this.setState({showBookForm: false,updateBook: false});
}

handleBookSubmit = (data) => {
  this.state.books.push(data);
  this.setState({showBookForm: false,updateBook: false});
}
// --------end-----------------------------------------

// to handle events in author page 
// --------start---------------------------------------
handleEditAuthor = (data) => {
  console.log(data);
  this.setState({showAuthorForm: true, updateAuthor: true});
  console.log('edit author clicked');
}

handleDeleteAuthor = (id) => {
  console.log(id);
  console.log('delete author clicked');
}

handleAddAuthor = () => {
  this.setState({showAuthorForm: true,updateAuthor: false});
}

handleAuthorSubmit = (data) => {
  this.state.authors.push(data);
  this.setState({showAuthorForm: false,updateAuthor: false});
} 

handleAuthorDiscard = () => {
  this.setState({showAuthorForm: false});
}
// --------end---------------------------------------

componentDidMount(){
  this.getBookData();
  this.getAuthorData();
}

render() {
    return (
      <React.Fragment>
      <Router>
          <div>
            <Route path="/" component={() => <HeadingNavBar />} />
            <Route 
              path="/books" 
              component={() => 
                <Books 
                  books={this.state.books} 
                  onClick={this.handleAddBook}
                  onEditClick={this.handleEditBook}
                  onDelteClick={this.handleDeleteBook}
                />
              } 
            />
            <Route 
              path="/authors" 
              component={() => 
                <Authors 
                  authors={this.state.authors}
                  onClick={this.handleAddAuthor}
                  onEditClick={this.handleEditAuthor}
                  onDelteClick={this.handleDeleteAuthor}
                />
              } 
            />
          </div>
      </Router>
      <BookForm 
        showForm={this.state.showBookForm} 
        update={this.state.updateBook}
        onDiscard={this.handleBookDiscard} 
        onSubmit={this.handleBookSubmit}
        authorData={this.state.authors}
      />
      <AuthorForm 
        showForm={this.state.showAuthorForm} 
        update={this.state.updateAuthor}
        onDiscard={this.handleAuthorDiscard} 
        onSubmit={this.handleAuthorSubmit}
      />
      </React.Fragment>
    );
  }
}

export default App;
