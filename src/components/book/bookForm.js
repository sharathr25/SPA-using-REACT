import React,{ Component} from 'react';

class BookForm extends Component {

constructor(){
    super();
    this.state = {
        data: null
    }
}
handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form.elements);
    const data = new FormData(e.target);
    let bookData = {};
    let authorData;
    for (let name of data.keys()) {
        bookData[name] = data.get(name);
    }
    bookData.pages = parseInt(bookData.pages,10);
    bookData.id = parseInt(bookData.id,10);
    authorData = this.props.authorData.filter((data) => {
        return data.id === bookData.id;
    });
    bookData.name = authorData[0].name;
    bookData.isbn = parseInt(bookData.isbn,10);
    bookData.imgsrc = 'images/9781449328252.jpeg';
    this.props.onSubmit(bookData);
}

    render() {
        if(this.props.showForm)
        {
            let optionJsx = this.props.authorData.map((data) => {
                return <option key={data.id} value={data.id}>{data.name}</option>
            });
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
                                placeholder="Enter ISBN" name="isbn" 
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
                                name="title" />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="subtitle">SUBTITLE:</label></td>
                            <td><input 
                            type="text"
                            id="subtitle" 
                            name="subtitle" 
                            placeholder="Enter sub-title" />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="description">DESCRIPTION:</label></td>
                            <td><input 
                                type="text" 
                                id="description" 
                                name="description" 
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
                                placeholder="Enter pages" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="publishedon">PUBLISHED ON:</label></td>
                            <td><input 
                                type="date" 
                                id="publishedon" 
                                name="publishedon" 
                                placeholder="published-on" />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="id">SELECT AUTHOR:</label></td>
                            <td>
                                <select 
                                    id="id" 
                                    name="id" 
                                    disabled={this.props.update}>
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
                                    onClick={this.props.onDiscard} 
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

export default BookForm;