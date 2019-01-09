import React, {Component} from 'react';

class TableHead extends Component {
    render() {
      let tableHead;
      if(this.props.url === 'books') {
          tableHead = <tr>
          <th>SL No</th>
          <th>Image</th>
          <th>ISBN</th>
          <th>Title</th>
          <th>Author</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>;
      } else {
        tableHead = <tr>
            <th>ID</th>
            <th>Name</th>
            <th>About</th>
            <th>Place</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>;
      }
      return (
        <thead>
          {tableHead}
        </thead>
      );
    }
  }

export default TableHead;