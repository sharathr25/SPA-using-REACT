import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HeadingNavBar from './heading.js';
import Books from './book/books';
import Authors from './author/authors';
import BookForm from './book/bookForm';
import AuthorForm from './author/authorForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {showBooks} from '../actions/books/book_form_status';
import {showAuthors} from '../actions/authors/author_form_status';

class App extends Component {

componentDidMount() {
  this.props.showBooks();
  this.props.showAuthors();
}

render() {
    return (
      <React.Fragment>
      <Router>
          <div>
            <Route path="/" component={() => <HeadingNavBar />} />
            <Route 
              path="/books" 
              component={Books} 
            />
            <Route 
              path="/authors" 
              component={Authors } 
            />
          </div>
      </Router>
      <BookForm 
        showForm={this.props.bookFormFromStore.showForm} 
        update={this.props.bookFormFromStore.updateBook}
        authorData={this.props.authors}
      />
      <AuthorForm 
        showForm={this.props.authorFormFormStore.showForm} 
        update={this.props.authorFormFormStore.update}
      />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    bookFormFromStore: state.bookFormFromStore,
    authorFormFormStore: state.authorFormFormStore,
    authors: state.authorsFromStore.authors
  };
}



function matchDispachToProps(dispach) {
  return bindActionCreators({showBooks: showBooks,showAuthors: showAuthors},dispach);
}

export default connect(mapStateToProps,matchDispachToProps)(App);
