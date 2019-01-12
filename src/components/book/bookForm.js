import React,{ Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {hideBookForm, addBook, deleteBook, updateBook} from '../../actions/books/book_form_status';

class BookForm extends Component {
constructor(props){
    super(props);
    this.state = {
        name: 'Marijn Haverbeke',
        id: 1,
        imgsrc: 'images/9781449328252.jpeg',
        publisher: '',
        publishedOn: '',
        title:'',
        pages:0,
        description:'',
        subtitle:'',
        isbn: 0
    }
}

handleOnChange = (event) => {
    let value = event.target.value;
    if(event.target.name === 'id' || event.target.name === 'isbn' || event.target.name === 'pages') {
        value = parseInt(value,10);
        if(event.target.name === 'id') {
            const data = this.props.authorData.filter((data) => {
                return data.id === value;
            });
            this.setState({name: data[0].name});
        }
    }
    this.setState({ [event.target.name]: value });
}

handleSubmit = (e) => {
    e.preventDefault();
    this.props.hideBookForm();
    const currentState = this.state;
    if(this.props.update){
        currentState.isbn = this.props.book.isbn;
        this.props.updateBook(currentState);
        window.location.reload();
    } else {
        this.props.addBook(currentState);
    }
}

getOptionJsx() {
    let optionJsx = this.props.authorData.map((data) => {
        return <option key={data.id} value={data.id}>{data.name}</option>
    });
    return optionJsx;
}
    render() {
        if(this.props.showForm)
        {
            let optionJsx = this.getOptionJsx();
            return (
                <div className="form-popup">
                    <div className="form-elements">
                    <form onSubmit={this.handleSubmit}>
                    <table>
                        <tbody>
                        <tr>
                            <td><label htmlFor="isbn">ISBN:</label></td>
                            <td>
                                <input 
                                type="text" id="isbn" 
                                placeholder="Enter ISBN" 
                                name="isbn"
                                onChange={this.handleOnChange} 
                                disabled={this.props.update}/>
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="title">TITLE:</label></td>
                            <td>
                                <input 
                                type="text" 
                                id="title" 
                                placeholder="Enter title" 
                                onChange={this.handleOnChange}
                                name="title" />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="subtitle">SUBTITLE:</label></td>
                            <td><input 
                            type="text"
                            id="subtitle" 
                            name="subtitle" 
                            onChange={this.handleOnChange}
                            placeholder="Enter sub-title" />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="description">DESCRIPTION:</label></td>
                            <td><input 
                                type="text" 
                                id="description" 
                                name="description" 
                                onChange={this.handleOnChange}
                                placeholder="Enter description" />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="publisher">PUBLISHER:</label></td>
                            <td>
                                <input 
                                type="text" 
                                id="publisher" 
                                name="publisher"
                                onChange={this.handleOnChange}
                                placeholder="Enter publisher" />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="pages">PAGES:</label></td>
                            <td>
                                <input 
                                type="number" 
                                id="pages" 
                                name="pages" 
                                onChange={this.handleOnChange}
                                placeholder="Enter pages" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="publishedOn">PUBLISHED ON:</label></td>
                            <td><input 
                                type="date" 
                                id="publishedOn" 
                                name="publishedOn" 
                                onChange={this.handleOnChange}
                                placeholder="published-on" />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="id">SELECT AUTHOR:</label></td>
                            <td>
                                <select 
                                    id="id" 
                                    name="id" 
                                    disabled={this.props.update}
                                    onChange={this.handleOnChange}>
                                    {optionJsx}
                                </select>
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
                                    onClick={() => this.props.hideBookForm()} 
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
        } else return <p></p>
    }   
}

function mapStateToProps(state){
    return {update: state.bookFormFromStore.update, book: state.bookFormFromStore.book};
}

function matchDispachToProps(dispach) {
    return bindActionCreators({hideBookForm: hideBookForm,
        addBook: addBook,
        deleteBook: deleteBook,
        updateBook: updateBook
    },dispach);
}

export default connect(mapStateToProps,matchDispachToProps)(BookForm);