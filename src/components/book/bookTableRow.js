import React,{ Component} from 'react';

class BookTableRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
        }
      }

handleEditClick = () => {
    this.props.onEditClick(this.state.data);
}

handleDeleteClick = () => {
    this.props.onDelteClick(this.state.data.isbn);
}

render() {
    return (
        <React.Fragment>
        <tr key={this.state.data.isbn}>
            <td><img src={this.state.data.imgsrc} alt="book" /></td>
            <td>{this.state.data.isbn}</td>
            <td>{this.state.data.title}</td>
            <td>{this.state.data.name}</td>
            <td><button onClick={ this.handleEditClick } className="btn btn-info">EDIT</button></td>
            <td><button onClick={ this.handleDeleteClick } className="btn btn-danger">DELETE</button></td>
        </tr>
        </React.Fragment>
        );
    }
}

export default BookTableRow;