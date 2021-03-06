import React,{ Component} from 'react';

class TableRow extends Component {
    constructor() {
        super();
        this.state = {
            href: null,
            data: null,
        }
      }
    handleEditClick = () => {
        console.log(this.state.data);
    }

    handleDeleteClick = () => {
        console.log(this.state.data);
    }

    componentWillMount() {
        this.setState({ href: this.props.href, data: this.props.data})
    }

    render() {
        let count = 0;
        if(this.state.href === 'books') {
            count += 1;
            return (
                <tr key={this.state.data.isbn}>
                  <td>{count}</td>
                  <td><img src={this.state.data.imgsrc} alt="book" /></td>
                  <td>{this.state.data.isbn}</td>
                  <td>{this.state.data.title}</td>
                  <td>{this.state.data.name}</td>
                  <td><button onClick={ this.handleEditClick } className="btn btn-info">EDIT</button></td>
                  <td><button onClick={ this.handleDeleteClick } className="btn btn-danger">DELETE</button></td>
                </tr>
            );
        } else {
            return (
                <tr key={this.state.data.id}>
                  <td>{this.state.data.id}</td>
                  <td>{this.state.data.name}</td>
                  <td>{this.state.data.about}</td>
                  <td>{this.state.data.place}</td>
                  <td><button onClick={ this.handleEditClick } className="btn btn-info">EDIT</button></td>
                  <td><button onClick={ this.handleEditClick } className="btn btn-danger">DELETE</button></td>
                </tr>
            );
        }
    }
}

export default TableRow;