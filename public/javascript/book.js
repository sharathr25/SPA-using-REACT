class NavBar extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav navbar-nav">
          <Links name="books" value="BOOKS" link="/books.html" />
          <Links name="authors" value="AUTHORS" link="/authors.html" />
        </ul>
        <Buttons name="addbook" value="ADD BOOK" classname="btn btn-success" id="add-book" />
      </div>
    );
  }
}

class Links extends React.Component {
  render() {
    const { value, link } = this.props;
    return (
      <li><a href={link}>{value}</a></li>
    );
  }
}

class Buttons extends React.Component {
  render() {
    const { value, classname, id } = this.props;
    return (
      <button type="button" id={id} className={classname}>{value}</button>
    );
  }
}

class Table extends React.Component {
  render() {
    return (
      <table className="table">
        <TableHead />
        <TableData />
      </table>
    );
  }
}

class TableData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null,
    };
  }

  componentWillMount() {
    fetch('/books')
      .then(response => response.json())
      .then((books) => {
        let count = 0;
        const bookData = books.map((data) => {
          count += 1;
          return (
            <tr>
              <td>{count}</td>
              <td><img src={data.imgsrc} alt="book" /></td>
              <td>{data.isbn}</td>
              <td>{data.title}</td>
              <td>{data.name}</td>
              <td><Buttons value="EDIT" classname="btn btn-info" /></td>
              <td><Buttons value="DELETE" classname="btn btn-danger" /></td>
            </tr>
          );
        });
        this.setState({ book: bookData });
      });
  }

  render() {
    const { book } = this.state;
    console.log(typeof book);
    return (
      <tbody>
        {book}
      </tbody>
    );
  }
}

class TableHead extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th>SL No</th>
          <th>Image</th>
          <th>ISBN</th>
          <th>Title</th>
          <th>Author</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
    );
  }
}

ReactDOM.render(
  <h1>Books</h1>,
  document.getElementById('heading'),
);

const element = <NavBar />;
ReactDOM.render(
  element,
  document.getElementById('nav'),
);

ReactDOM.render(
  <Table />,
  document.getElementById('table'),
);
