import React,{ Component } from 'react';

class TableData extends Component {
    
    handleEditClick() {
        alert('edit button clicked');
    }

    handleDeleteClick() {
        alert('delete button clicked');
    }

render() {
    const { data } = this.props;
    return (
      <tbody>
        {data}
      </tbody>
    );
  }
}

export default TableData;