# sanbitso
Bitso Wrapper. See [Bitso API](https://bitso.com/api_info) for more details.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-month]][downloads-url]
[![Maintainability](https://api.codeclimate.com/v1/badges/2943d98d7234fb7754bc/maintainability)](https://codeclimate.com/github/sanjorgek/sanbitso/maintainability)
[![CircleCI](https://circleci.com/gh/sanjorgek/sanbitso.svg?style=svg)](https://circleci.com/gh/sanjorgek/sanbitso)
[![Build Status](https://travis-ci.org/sanjorgek/sanbitso.svg?branch=master)](https://travis-ci.org/sanjorgek/sanbitso)
[![bitHound Overall Score](https://www.bithound.io/github/sanjorgek/sanbitso/badges/score.svg)](https://www.bithound.io/github/sanjorgek/sanbitso)
[![bitHound Dependencies](https://www.bithound.io/github/sanjorgek/sanbitso/badges/dependencies.svg)](https://www.bithound.io/github/sanjorgek/sanbitso/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/sanjorgek/sanbitso/badges/devDependencies.svg)](https://www.bithound.io/github/sanjorgek/sanbitso/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/sanjorgek/sanbitso/badges/code.svg)](https://www.bithound.io/github/sanjorgek/sanbitso)

## Public API

```javascript
const public = require('bitso').public;

//promise functions avialable
public.availableBooks({book: "btc_mxn"});
public.ticker();
public.ticker("bch_btc");
public.orderBook({book:"btc_mxn"});
public.orderBook({book:"btc_mxn", aggregate: true});
public.trades({book: "btc_mxn"});
public.trades({book: "btc_mxn", sort: "asc"});
public.trades({book: "btc_mxn", sort: "desc"});
public.trades({book: "btc_mxn", limit: 3});
```

[![forthebadge](http://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)](http://sanjorgek.com/)
[![forthebadge](http://forthebadge.com/images/badges/built-by-codebabes.svg)](http://sanjorgek.com/)
[![forthebadge](http://forthebadge.com/images/badges/certified-elijah-wood.svg)](http://sanjorgek.com/)
[![forthebadge](http://forthebadge.com/images/badges/compatibility-betamax.svg)](http://sanjorgek.com/)

[npm-image]: https://img.shields.io/npm/v/sanbitso.svg
[npm-url]: https://npmjs.org/package/sanbitso
[downloads-month]: https://img.shields.io/npm/dm/sanbitso.svg
[downloads-url]: https://npmjs.org/package/sanbitso
