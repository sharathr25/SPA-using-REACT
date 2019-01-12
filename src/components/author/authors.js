import React, { Component } from 'react';
import AuthorTable from './authorTable';
import AuthorTableRow from './authorTableRow';
import HeadingNavBar from '../heading.js';
import Buttons from '../buttons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showAuthorForm,showAuthors} from '../../actions/authors/author_form_status';

class Authors extends Component {

  constructor(){
    super();
    this.state = {
      authors: null
    }
  }
  getDbDataJsx(){
    let key;
    const dbData = this.props.authorsFromStore.authors;
    const dbDataJsx = dbData.map((data) => {
        key = data.id;
        return <AuthorTableRow 
                onEditClick={this.props.onEditClick}
                onDelteClick={this.props.onDelteClick}
                data={data} 
                key={key}
              />
        });
    return dbDataJsx;
  }

render() {
  console.log('render');
    let dbDataJsx = this.getDbDataJsx();
    return (
        <React.Fragment>
            <HeadingNavBar heading="AUTHORS"/>
            <AuthorTable data={dbDataJsx}/>
            <Buttons onClick={()=>this.props.showAuthorForm()} value="ADD AUTHOR" classname="btn btn-success" id="add" />
        </React.Fragment>
      );
  }
}

function mapStateToProps(state) {
  return {
    authorsFromStore: state.authorsFromStore 
  };
}

function matchDispachToProps(dispach) {
  return bindActionCreators({showAuthorForm: showAuthorForm,showAuthors: showAuthors},dispach);
}

export default connect(mapStateToProps,matchDispachToProps)(Authors);
