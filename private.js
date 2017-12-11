const crypto = require('crypto');
const request = require('request-promises');
const Promise = require("bluebird");

module.exports = (key, secret) => {
  const options = (method, path, qs, body) => {
    let nonce = (new Date()).getTime();
    let data = nonce+method+"/v3/"+path+"/";
    let signature = crypto.createHmac('sha256', secret).update(data).digest('hex');
    let opts = {
      uri: 'https://api.bitso.com/v3/'+path,
      method,
      headers: {
            'Authorization': "Bitso "+key+":" +nonce+":"+signature
        }
    };
    if(qs){
      opts.qs = qs;
    }
    if(body){
      opts.body = body;
    }
    return opts;
  };
  return {
    balance() {
      return request(options("GET","balance"))
      .then((res) => {
        return (res.body.success)?
          Promise.resolve(res.body.payload):
          Promise.reject(new Error("Success false"));
      });
    },
    accountStatus() {
      return request(options("GET","account_status"))
      .then((res) => {
        return (res.body.success)?
          Promise.resolve(res.body.payload):
          Promise.reject(new Error("Success false"));
      });
    },
    setPhoneNumber(phone) {
      return request(options("POST","phone_number", null, {phone_number:phone}))
      .then((res) => {
        return (res.body.success)?
          Promise.resolve(res.body.payload):
          Promise.reject(new Error("Success false"));
      });
    },
    verificationCode(code) {
      return request(options("POST","verification_code 	", null, {verification_code:phone}))
      .then((res) => {
        return (res.body.success)?
          Promise.resolve(res.body.payload):
          Promise.reject(new Error("Success false"));
      });
    },
    fees() {
      return request(options("GET","fees"))
      .then((res) => {
        return (res.body.success)?
          Promise.resolve(res.body.payload):
          Promise.reject(new Error("Success false"));
      });
    },
  };
};
