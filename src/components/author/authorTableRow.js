import React,{ Component} from 'react';

class TableRow extends Component {
    constructor() {
        super();
        this.state = {
            href: null,
            data: null,
        }
      }

componentWillMount() {
    this.setState({data: this.props.data})
}

handleEditClick = () => {
    this.props.onEditClick(this.state.data);
}

handleDeleteClick = () => {
    this.props.onDelteClick(this.state.data.id);
}

render() {
    return (
        <tr key={this.state.data.id}>
            <td>{this.state.data.id}</td>
            <td>{this.state.data.name}</td>
            <td>{this.state.data.about}</td>
            <td>{this.state.data.place}</td>
            <td><button onClick={ this.handleEditClick } className="btn btn-info">EDIT</button></td>
            <td><button onClick={ this.handleDeleteClick } className="btn btn-danger">DELETE</button></td>
        </tr>
        );
    }
}

export default TableRow;