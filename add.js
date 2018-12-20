const add = ({a, b}) => a + b;

const addHandler = async  msg => ({
  status: 200,
  body: JSON.stringify(add(JSON.parse(msg.body)))
});

module.exports = {
  addHandler
};