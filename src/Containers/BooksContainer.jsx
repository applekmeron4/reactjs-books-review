import { connect } from 'react-redux';
import BookList from '../components/BookList';
import {
  receiveBooks,
  deleteBook,
  undoDeleteBook,
} from '../store/modules/books';

const mapStateToProps = state => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveBooks: books => {
      dispatch(receiveBooks(books));
    },
    deleteBook: bookId => {
      dispatch(deleteBook(bookId));
    },
    undoDeleteBook: bookId => {
      dispatch(undoDeleteBook(bookId));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookList);
