const request = require('request-promises');
const Promise = require("bluebird");

const options = (path, qs) => {
  let opts = {
    uri: 'https://api.bitso.com/v3/'+path,
    method: "GET",
    json: true
  };
  if(qs){
    opts.qs = qs;
  }
  return opts;
};

module.exports = {
  availableBooks(query) {
    return request(options("available_books", query))
    .then((res) => {
      return (res.body.success)?
        Promise.resolve(res.body.payload):
        Promise.reject(new Error("Success false"));
    });
  },
  ticker(book) {
    return request(options("ticker", {book}))
    .then((res) => {
      return (res.body.success)?
        Promise.resolve(res.body.payload):
        Promise.reject(new Error("Success false"));
    });
  },
  orderBook(query) {
    return request(options("order_book", query))
    .then((res) => {
      return (res.body.success)?
        Promise.resolve(res.body.payload):
        Promise.reject(new Error("Success false"));
    });
  },
  trades(query) {
    return request(options("trades", query))
    .then((res) => {
      return (res.body.success)?
        Promise.resolve(res.body.payload):
        Promise.reject(new Error("Success false"));
    });
  }
};
