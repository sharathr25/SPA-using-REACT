import React,{ Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Button from './buttons';
import {hidePopUpMessage} from '../actions/popup';
import {showBooks} from '../actions/books/books';

class PopUpMessage extends Component {
    handleOnClick = (e) => {
        this.props.hidePopUpMessage();
    }

    render() {
        if(this.props.data.showPopUpMessage){              
            return (
                <div className="form-popup">
                    <div className="form-elements">
                    {this.props.data.message}
                    <Button onClick={this.handleOnClick} value="OK" classname="btn btn-success"/> 
                    </div>
                </div>
            );
        } else {
            return <p></p>
        }
    } 
}  

function mapStateToProps(state){
    return {data:state.popUpMessage};
}

function matchDispachToProps(dispach) {
    return bindActionCreators({
        hidePopUpMessage: hidePopUpMessage,
        showBooks: showBooks
    },dispach);
}

export default connect(mapStateToProps,matchDispachToProps)(PopUpMessage);