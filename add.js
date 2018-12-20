const add = ({a, b, c}) => a + b + c;

const addHandler = async  msg => ({
  status: 200,
  body: JSON.stringify(add(JSON.parse(msg.body)))
});

module.exports = {
  addHandler
};