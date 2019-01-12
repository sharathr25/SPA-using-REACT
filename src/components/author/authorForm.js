import React,{ Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {hideAuthorForm, addAuthor, deleteAuthor, updateAuthor} from '../../actions/authors/author_form_status';

class AuthorForm extends Component {

    constructor(){
        super();
        this.state = {
            id:1,
            name:'',
            place:'',
            about:''
        }
    }
    handleOnChange = (event) => {
        let value = event.target.value;
        if(event.target.name === 'id') {
            value = parseInt(value,10);
        }
        this.setState({ [event.target.name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.hideAuthorForm();
        const currentState = this.state;
        if(this.props.update){
            currentState.id = this.props.author.id;
            this.props.updateAuthor(currentState);
            window.location.reload();
        } else
            this.props.addAuthor(currentState);
    }

    render() {
        if(this.props.showForm){
            return (
                <div className="form-popup">
                    <div className="form-elements">
                    <form onSubmit={this.handleSubmit}>
                    <table>
                        <tbody>
                        <tr>
                            <td><label htmlFor="id">ID:</label></td>
                            <td>
                                <input 
                                    type="text" 
                                    id="id" 
                                    placeholder="Enter ID" 
                                    name="id" 
                                    onChange={this.handleOnChange}
                                    disabled={this.props.update}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="name">NAME:</label></td>
                            <td>
                                <input 
                                    type="text" 
                                    id="name"  
                                    placeholder="Enter Name" 
                                    name="name" 
                                    onChange={this.handleOnChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="about">About:</label></td>
                            <td>
                                <input 
                                type="text" 
                                id="about"  
                                name="about" 
                                placeholder="Enter about" 
                                onChange={this.handleOnChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="place">PLACE:</label></td>
                            <td><input 
                                type="text" 
                                id="place"  
                                name="place" 
                                placeholder="Enter place" 
                                onChange={this.handleOnChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button 
                                    id="submit" 
                                    type="submit" 
                                    className="btn btn-success btn-sm">
                                    SUBMIT
                                </button>
                                </td>
                            <td><button 
                                    id="discard" 
                                    type="button" 
                                    onClick={() => this.props.hideAuthorForm()} 
                                    className="btn btn-warning btn-sm">
                                    DISCARD
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </form>
                    </div>
                </div>
            );
        } else {
            return <p></p>
        }
    }   
}

function mapStateToProps(state){
     return {update:state.authorFormFormStore.update,author: state.authorFormFormStore.author};
}

function matchDispachToProps(dispach) {
    return bindActionCreators({hideAuthorForm: hideAuthorForm,
        addAuthor: addAuthor,
        updateAuthor: updateAuthor,
        deleteAuthor: deleteAuthor
    },dispach);
}

export default connect(mapStateToProps,matchDispachToProps)(AuthorForm);