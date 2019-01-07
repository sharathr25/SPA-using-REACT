import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar';
import BookTable from './components/bookTable'
import AuthorTable from './components/authorTable'
import BookTableRow from './components/bookTableRow'
import AuthorTableRow from './components/authorTableRow'

class App extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
      data: null,
      table: null
    }
  }

getData = async (href) => {
  if(this.state.url !== href){
    this.setState({url: href});
    const url = 'http://10.10.4.173:4000/'+href;
    const responce = await fetch(url, {mode: 'cors'});
    const dbData = await responce.json();
    let key;
    const dbDataJsx = dbData.map((data) => {
    if(href === 'books'){
      key = data.isbn
      return <BookTableRow href={href} data={data} key={key}/>
    }
    key = data.id;
    return <AuthorTableRow href={href} data={data} key={key}/>
    });
    this.setState({ data: dbDataJsx });
    if(href === 'books') {
      this.setState({ table: <BookTable data={this.state.data}/>});
    } else {
      this.setState({ table: <AuthorTable data={this.state.data}/>});
    }
  }
}  

componentWillMount() {
    this.getData('books');
    this.setState({ table: <BookTable data={this.state.data}/>});
}

handleClick = (e) => {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    this.getData(href);
}

render() {
    return (
      <React.Fragment>
      <h1 id="heading">BOOKS</h1>
      <NavBar click={this.handleClick}/>
      {this.state.table}
      </React.Fragment>
    );
  }
}

export default App;
