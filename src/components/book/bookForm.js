import React,{ Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {hideBookForm, addBook, deleteBook, updateBook} from '../../actions/books/books';
import {showPopUpMessage} from '../../actions/popup';
import {setBookUpdated} from '../../actions/updation';

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

handleOnSelect = (event) => {
    let value = parseInt(event.target.value, 10);
    const data = this.props.authorData.filter((data) => {
        return data.id === value;
    });     
    this.setState({name: data[0].name});
}

handleOnChange = (event) => {
    let value = event.target.value;
    if(event.target.name === 'isbn' || event.target.name === 'pages') {
        value = parseInt(value,10);
    }
    this.setState({ [event.target.name]: value });
}

setCurrentState(){
    const currentState = {};
    currentState.isbn = this.props.book.isbn;
    currentState.title = this.state.title || this.props.book.title;
    currentState.subtitle = this.state.subtitle || this.props.book.subtitle;
    currentState.publisher = this.state.publisher || this.props.book.publisher;
    currentState.pages = this.state.pages || this.props.book.pages;
    currentState.description = this.state.description || this.props.book.description;
    currentState.publishedOn = this.state.publishedOn || this.props.book.publishedOn;
    currentState.imgsrc = this.state.imgsrc;
    currentState.name = this.props.book.name;
    return currentState;
}

handleSubmit = async (e) => {
    e.preventDefault();
    let currentState = this.state;
    if(this.props.update){
        currentState = this.setCurrentState();
        const index = this.props.books.findIndex((book) => {
            return book.isbn === currentState.isbn;
        });
        await this.props.updateBook(currentState, index);
        this.props.showPopUpMessage('BOOK UPDATED');
    }  else {
        await this.props.addBook(currentState);
        this.props.showPopUpMessage('BOOK INSERTED');
    }
    this.props.hideBookForm();
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
                                defaultValue={this.props.book.isbn}
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
                                defaultValue={this.props.book.title}
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
                            defaultValue={this.props.book.subtitle}
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
                                defaultValue={this.props.book.description}
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
                                defaultValue={this.props.book.publisher}
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
                                defaultValue={this.props.book.pages}
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
                                    onChange={this.handleOnSelect}>
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
    return {
        update: state.bookFormFromStore.update,
        book: state.bookFormFromStore.book,
        books: state.books,
    };
}

function matchDispachToProps(dispach) {
    return bindActionCreators({hideBookForm: hideBookForm,
        addBook: addBook,
        deleteBook: deleteBook,
        updateBook: updateBook,
        showPopUpMessage: showPopUpMessage,
        setBookUpdated: setBookUpdated
    },dispach);
}

export default connect(mapStateToProps,matchDispachToProps)(BookForm);