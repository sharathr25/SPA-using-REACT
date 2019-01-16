import React,{ Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { deleteAuthor, showUpdateForm} from '../../actions/authors/authors';
import {showPopUpMessage} from '../../actions/popup';

class AuthorTableRow extends Component {
    constructor() {
        super();
        this.state = {
            data: null
        }
      }

componentWillMount() {
    this.setState({data: this.props.data})
}

handleEditClick = () => {
    this.props.showUpdateForm(this.state.data);
}

handleDeleteClick = () => {
    this.props.deleteAuthor(this.state.data.id);
    this.props.showPopUpMessage('AUTHOR DELETED');
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

function mapStateToProps(){
    return {};
}

function matchDispachToProps(dispach) {
    return bindActionCreators({
        deleteAuthor: deleteAuthor,
        showUpdateForm:showUpdateForm,
        showPopUpMessage: showPopUpMessage
    },dispach);
}

export default connect(mapStateToProps,matchDispachToProps)(AuthorTableRow);