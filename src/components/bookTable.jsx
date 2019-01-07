import React,{ Component} from 'react';
import TableData from './tableData';

class BookTable extends Component {
    render() {
      return (
        <table className="table">
        <thead>
          <tr>
          <th>SL No</th>
          <th>Image</th>
          <th>ISBN</th>
          <th>Title</th>
          <th>Author</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        </thead>
          <TableData data={this.props.data}/>
        </table>
      );
    }
  }

export default BookTable;