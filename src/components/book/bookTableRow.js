import React,{ Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {deleteBook, showUpdateForm} from '../../actions/books/books'
import {showPopUpMessage} from '../../actions/popup';

class BookTableRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
        }
      }

handleEditClick = () => {
    this.props.showUpdateForm(this.state.data);
}

handleDeleteClick = () => {
    this.props.deleteBook(this.state.data.isbn);
    this.props.showPopUpMessage('BOOK DELETED');
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

function mapStateToProps(state){
    return {};
}

function matchDispachToProps(dispach) {
    return bindActionCreators({
        deleteBook: deleteBook, 
        showUpdateForm: showUpdateForm,
        showPopUpMessage: showPopUpMessage
    },dispach);
}

export default connect(mapStateToProps,matchDispachToProps)(BookTableRow);