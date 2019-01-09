import React,{ Component} from 'react';

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
          <tbody>
          {this.props.data}
          </tbody>
        </table>
      );
    }
  }

export default AuthorTable;