import React,{ Component} from 'react';

class BookForm extends Component {
constructor(){
    super();
    this.state = {
        name: 'Marijn Haverbeke',
        id: 1,
        imgsrc: 'images/9781449328252.jpeg',
        publisher: '',
        published: '',
        title:'',
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
            console.log(data);
            this.setState({name: data[0].name});
        }
    }
    this.setState({ [event.target.name]: value });
}

handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
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
                            <td><label htmlFor="publishedon">PUBLISHED ON:</label></td>
                            <td><input 
                                type="date" 
                                id="publishedon" 
                                name="publishedon" 
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