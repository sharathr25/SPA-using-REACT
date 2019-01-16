import React,{ Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {hideAuthorForm, addAuthor, deleteAuthor, updateAuthor} from '../../actions/authors/authors';
import {showPopUpMessage} from '../../actions/popup';

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

    setCurrentState = () => {
        const currentState = {};
        currentState.id = this.props.author.id;
        currentState.name = this.state.name || this.props.author.name;
        currentState.place = this.state.place || this.props.author.place;
        currentState.about = this.state.about || this.props.author.about;
        return currentState;
    }
    handleOnChange = (event) => {
        let value = event.target.value;
        if(event.target.name === 'id') {
            value = parseInt(value,10);
        }
        this.setState({ [event.target.name]: value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let currentState = this.state;
        if(this.props.update){
            currentState = this.setCurrentState();
            const index = this.props.authors.findIndex((author) => {
                return author.id === currentState.id;
            });
            await this.props.updateAuthor(currentState,index);
            this.props.showPopUpMessage('AUTHOR UPDATED');
        } else {
            await this.props.addAuthor(currentState);
            this.props.showPopUpMessage('AUTHOR INSERTED');
        }
        this.props.hideAuthorForm();
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
                                    defaultValue={this.props.author.id}
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
                                    defaultValue={this.props.author!== 'undefined'?this.props.author.name:''}
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
                                defaultValue={this.props.author!== 'undefined'?this.props.author.about:''}
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
                                defaultValue={this.props.author!== 'undefined'?this.props.author.place:''}
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
     return {
        authors:state.authors,
        update:state.authorFormFormStore.update,
        author: state.authorFormFormStore.author
    };
}

function matchDispachToProps(dispach) {
    return bindActionCreators({hideAuthorForm: hideAuthorForm,
        addAuthor: addAuthor,
        updateAuthor: updateAuthor,
        deleteAuthor: deleteAuthor,
        showPopUpMessage: showPopUpMessage
    },dispach);
}

export default connect(mapStateToProps,matchDispachToProps)(AuthorForm);