const bitso = require('../index');
const PrivateBitso = bitso.private("key","secret");

describe("Public API", () => {
  it("Balance", (done) => {
    PrivateBitso.balance()
    .then((res) => {
      console.log(res);
      done();
    })
    .catch(done);
  });
  it("Account Status", (done) => {
    PrivateBitso.accountStatus()
    .then((res) => {
      console.log(res);
      done();
    })
    .catch(done);
  });
});
