// 1. Create an object that represents a book. It should have
// 4-5 properties that make sense for a book to have.
// 2. Then write a function that has one argument, a book, that
// will return the following description from your book object:
// ‘The book <book name> was written by <author name> in
// the year <publishing year>’


const getInfoBook = (book) => {

    return `The book ${book.name }was written by ${book.author} in the year ${book.year}`
};


const book = {
    name:"Rambam mishne-torah",
    author:"Moshe Ben Maimon",
    subject:"Bible -rules",
    year:"1175"
}

const res = getInfoBook(book);
console.log(res);
