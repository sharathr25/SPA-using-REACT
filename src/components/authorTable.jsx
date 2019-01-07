import React,{ Component} from 'react';
import TableData from './tableData';

class AuthorTable extends Component {
    render() {
      return (
        <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>About</th>
            <th>Place</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          </thead>
          <TableData data={this.props.data}/>
        </table>
      );
    }
  }

export default AuthorTable;