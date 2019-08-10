const RECEIVE_BOOKS = 'books/RECEIVE_BOOKS';
const DELETE_BOOK = 'books/DELETE_BOOK';
const UNDO_DELETE_BOOK = 'books/UNDO_DELETE_BOOK';

export const receiveBooks = books => ({ type: RECEIVE_BOOKS, books });
export const deleteBook = bookId => ({ type: DELETE_BOOK, bookId });
export const undoDeleteBook = bookId => ({ type: UNDO_DELETE_BOOK, bookId });

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_BOOKS:
      return [...action.books];
    case DELETE_BOOK:
      return state.map(book => {
        if (book.bookId === action.bookId) {
          book.deletedAt = new Date().toISOString();
        }
        return book;
      });
    case UNDO_DELETE_BOOK:
      return state.map(book => {
        if (book.bookId === action.bookId) {
          book.deletedAt = null;
        }
        return book;
      });
    default:
      return state;
  }
};
