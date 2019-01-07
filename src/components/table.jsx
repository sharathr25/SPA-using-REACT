import React,{ Component} from 'react';
import TableHead from './tableHead';
import TableData from './tableData';

class Table extends Component {
    render() {
      return (
        <table className="table">
          <TableHead url={this.props.url}/>
          <TableData data={this.props.data}/>
        </table>
      );
    }
  }

export default Table;