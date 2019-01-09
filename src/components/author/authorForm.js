import React,{ Component} from 'react';

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
        console.log(this.state);
        this.props.onSubmit(this.state);
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
        } else {
            return <p></p>
        }
    }   
}

export default AuthorForm;