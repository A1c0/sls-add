const R = require('ramda');

const add = ({...args}) => R.pipe(
  R.values,
  R.reduce(R.add, 0)
)(args);

const addHandler = async  msg => ({
  status: 200,
  body: JSON.stringify(add(JSON.parse(msg.body)))
});

module.exports = {
  addHandler
};