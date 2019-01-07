import React,{ Component} from 'react';
import Buttons from './buttons';

class NavBar extends Component {
    render() {
      return (
        <nav className="navbar navbar-default" id="nav">
          <ul className="nav navbar-nav">
            <li><a onClick={this.props.click} href="books">BOOKS</a></li>
            <li><a onClick={this.props.click} href="authors">AUTHORS</a></li>
          </ul>
          <Buttons name="addbook" value="ADD BOOK" classname="btn btn-success" id="add-book" />
        </nav>
      );
    }
}

export default NavBar;