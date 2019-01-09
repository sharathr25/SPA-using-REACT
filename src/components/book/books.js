import React, { Component } from 'react';
import BookTable from './bookTable'
import BookTableRow from './bookTableRow'
import HeadingNavBar from '../heading.js'
import Buttons from '../buttons';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData : this.props.books
    }
  }

  render() {
      let dbDataJsx = <tr></tr>
      if(this.state.bookData !== null){
        let key;
        const dbData = this.state.bookData;
        dbDataJsx = dbData.map((data) => {
          key = data.isbn
          return <BookTableRow 
                  onEditClick={this.props.onEditClick} 
                  onDelteClick={this.props.onDelteClick} 
                  data={data} key={key}
                />
        });
      }
      return (
        <React.Fragment>
          <HeadingNavBar heading="BOOKS"/>
          <BookTable data={dbDataJsx}/>
          <Buttons value="ADD BOOK" classname="btn btn-success" id="add" onClick={this.props.onClick}/>
        </React.Fragment>
      );
    }
}

export default Books;
