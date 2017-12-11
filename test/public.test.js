const bitso = require('../index');
const public = bitso.public;

describe("Public API", () => {
  it("Available Books", (done) => {
    public.availableBooks()
    .then((res) => {
      done();
    })
    .catch(done);
  });
  it("Available Books with query", (done) => {
    public.availableBooks({book: "btc_mxn"})
    .then((res) => {
      done();
    })
    .catch(done);
  });
  it("Ticker", (done) => {
    public.ticker()
    .then((res) => {
      done();
    })
    .catch(done);
  });
  it("Ticker with query", (done) => {
    public.ticker("bch_btc")
    .then((res) => {
      done();
    })
    .catch(done);
  });
  it("Order Book without query must fail", (done) => {
    public.orderBook()
    .then((res) => {
      done(new Error("bar query params"));
    })
    .catch((err) => {
      done();
    });
  });
  it("Order Book only with aggregate must fail", (done) => {
    public.orderBook({book: null, aggregate: true})
    .then((res) => {
      done(new Error("bar query params"));
    })
    .catch((err) => {
      done();
    });
  });
  it("Order Book with query", (done) => {
    public.orderBook({book:"btc_mxn"})
    .then((res) => {
      done();
    })
    .catch(done);
  });
  it("Order Book with query with aggregate", (done) => {
    public.orderBook({book:"btc_mxn", aggregate: true})
    .then((res) => {
      done();
    })
    .catch(done);
  });
  it("Trades without query must fail", (done) => {
    public.trades()
    .then((res) => {
      done(new Error("bar query params"));
    })
    .catch((err) => {
      done();
    });
  });
  it("Trades with book query", (done) => {
    public.trades({book: "btc_mxn"})
    .then((res) => {
      done();
    })
    .catch(done);
  });
});
