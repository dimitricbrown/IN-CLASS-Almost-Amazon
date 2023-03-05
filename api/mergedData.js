import { getAuthorBooks, getSingleAuthor } from './authorData';
import { getSingleBook } from './bookData';

// for merged promises

// TODO: Get data for viewBook
const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
// GET SINGLE BOOK
  getSingleBook(firebaseKey).then((bookObject) => { // returns single book object
    getSingleAuthor(bookObject.author_id) // we nest this promise so that we can use the book object
      .then((authorObject) => resolve({ ...bookObject, authorObject }));
  }).catch(reject);
  // GET AUTHOR
  // Create an object that has book data and an object named authorObject
});

const getAuthorDetails = (firebaseKey) => new Promise((resolve, reject) => {
// GET SINGLE AUTHOR
  getSingleAuthor(firebaseKey).then((authorObject) => {
    getAuthorBooks(authorObject)
      .then((bookObject) => resolve({ ...authorObject, bookObject }));
  }).catch(reject);
});

export { getBookDetails, getAuthorDetails };
