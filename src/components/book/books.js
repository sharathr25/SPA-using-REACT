import React, { Component } from 'react';
import BookTable from './bookTable'
import BookTableRow from './bookTableRow'
import HeadingNavBar from '../heading.js'
import Buttons from '../buttons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {showBookForm,showBooks} from '../../actions/books/books';

class Books extends Component {  
  getDbDataJsx(){
    let key;
    console.log(this.props.books);
    const dbData = this.props.books;
    const dbDataJsx = dbData.map((data) => {
    key = data.isbn
    return <BookTableRow onEditClick={this.props.onEditClick} onDelteClick={this.props.onDelteClick} 
                  data={data} key={key}
                />
        });
    return dbDataJsx;
  }

  render() {
    console.log('rendered');
      let dbDataJsx = this.getDbDataJsx();
      return (
        <React.Fragment>
          <HeadingNavBar heading="BOOKS"/>
          <BookTable data={dbDataJsx}/>
          <Buttons value="ADD BOOK" classname="btn btn-success" id="add" onClick={() => this.props.showBookForm()}/>
        </React.Fragment>
      );
    }
}

function mapStateToProps(state) {
  return {
    books: state.books,
    update: state.update
  };
}

function matchDispachToProps(dispach) {
  return bindActionCreators({showBookForm: showBookForm,showBooks: showBooks},dispach);
}

export default connect(mapStateToProps, matchDispachToProps)(Books);
