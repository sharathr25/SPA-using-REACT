import React,{ Component} from 'react';

class AuthorForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        let authorData = {};
        for (let name of data.keys()) {
            authorData[name] = data.get(name);
        }
        authorData.id = parseInt(authorData.id,10);
        this.props.onSubmit(authorData);
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