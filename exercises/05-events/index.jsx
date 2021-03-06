import React from 'react';
import BookForm from './BookForm.jsx';
import Book from './Book.jsx';

class Books extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [{
        title: 'Professional Node.js',
        author: 'Pedro Teixeira'
      }]
    };
  }

  onBook(book) {
    this.state.books.push(book);

    this.setState({
      books: this.state.books
    });
  }
  render() {
    let books = this.state.books.map(function(book) {
      return (<Book title={book.title} read={book.read} />);
    });

    return (
      <div>
        <BookForm onBook={this.onBook.bind(this)} />
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Read</th>
            </tr>
          </thead>
          <tbody>{books}</tbody>
        </table>
      </div>
    );
  }
};

export default Books;
