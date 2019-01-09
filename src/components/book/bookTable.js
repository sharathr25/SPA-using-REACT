import React,{ Component} from 'react';

class BookTable extends Component {
    render() {
      return (
        <table className="table">
        <thead>
          <tr>
          <th>Image</th>
          <th>ISBN</th>
          <th>Title</th>
          <th>Author</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
          {this.props.data}
        </tbody>
        </table>
      );
    }
  }

export default BookTable;