import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar';
import Table from './components/table'
import TableRow from './components/tableRow'

class App extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
      data: null
    }
  }

  getData = (href) => {
    if(this.state.url !== href){
      this.setState({url: href});
      const url = 'http://10.10.4.173:4000/'+href;
    fetch(url, {mode: 'cors'})
      .then(response => response.json())
      .then((dbData) => {
        let key;
        const dbDataJsx = dbData.map((data) => {
          key = href === 'books'? data.isbn : data.id;
          return <TableRow href={href} data={data} key={key}/>
        });
        this.setState({ data: dbDataJsx });
      });
    }
  }  

  componentWillMount() {
    this.getData('books');
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
      <Table url={this.state.url} data={this.state.data}/>
      </React.Fragment>
    );
  }
}

export default App;
