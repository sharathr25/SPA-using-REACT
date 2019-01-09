import React, { Component } from 'react';
import AuthorTable from './authorTable';
import AuthorTableRow from './authorTableRow';
import HeadingNavBar from '../heading.js';
import Buttons from '../buttons';

class Authors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorData: this.props.authors,
    }
  }

render() {
    let dbDataJsx=<tr></tr>;
    if(this.state.authorData !== null){
        let key;
        const dbData = this.state.authorData;
        dbDataJsx = dbData.map((data) => {
        key = data.id;
        return <AuthorTableRow 
                onEditClick={this.props.onEditClick}
                onDelteClick={this.props.onDelteClick}
                data={data} 
                key={key}
              />
        });
    }
    return (
        <React.Fragment>
            <HeadingNavBar heading="AUTHORS"/>
            <AuthorTable data={dbDataJsx}/>
            <Buttons onClick={this.props.onClick} value="ADD AUTHOR" classname="btn btn-success" id="add" />
        </React.Fragment>
      );
  }
}

export default Authors;
