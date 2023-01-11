// 1. create 2 book objects with properties: name, author, year.
// 2. create an empty object bookUtils (utils = short for utilities).
// 3. add to the bookUtils object a function getFirstPublished,
// that receives 2 books and returns the book with the
// smaller year.

// 4. add to the bookUtils object a function setNewEdition, that
// receives a book and an edition year and sets a new
// property latestEdition with the edition year, or updates an
// existing one.
// 5. add to the bookUtils object a setLanguage function, that
// receives a book and a language and sets a new property
// language with the languahe, or updates an existing one.
// 6. add to the bookUtils object a setTranslation function, that
// receives a book a language and a translator, and sets a
// new property of translation, which is an object that
// contains the translator and the language.
// 7. add to the bookUtils object a setPublisher function, that
// receives a book a name and location, and sets a new
// property named publisher, which is an object that contains
// the name and location.
// 8. add to the bookUtils object a function isSamePublisher,
// which receives 2 books and checks if the publisher name
// and location are identical in the 2 books
const book1 = {
  name: "The duty of the hearts",
  author: "Baḥya ben Joseph ibn Paḳuda",
  year: "1190",
};
const book2 = {
  name: "Rambam mishne-torah",
  author: "Moshe Ben Maimon",
  year: "1175",
};
const bookUtils = {
  getFirstPublished: function (book1, book2) {
    return book1.year >= book2.year ? book2.year : book1.year;
  },

  setNewEdition: function (book, year) {
    book["latestEdition"] = year;
  },

  setLanguage: function (book, language) {
    book["language"] = language;
  },
  setTranslation: function (book, language, translator) {
    book["translator"] = { language: language, translator: translator };
  },
  setPublisher: function (book, name, location) {
    book["publisher"] = { name: name, location: location };
  },
  isSamePublisher: function (book1, book2) {
    return book1.publisher.location == book2.publisher.location ? true : false;
  },
};

//test
console.log(bookUtils.getFirstPublished(book1,book2))
bookUtils.getFirstPublished(book1, book2);
bookUtils.setNewEdition(book1,1981);
bookUtils.setLanguage(book1, "Hebrew");
bookUtils.setTranslation(book2, "Hebrew", "Moshe Haimson");
bookUtils.setPublisher(book1, "The Schonzino family", "Italy");
bookUtils.setPublisher(book2, "New Books", "Uk");
console.log(bookUtils.isSamePublisher(book1, book2));