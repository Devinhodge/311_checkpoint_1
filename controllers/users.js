const users = require('../data/index');
const sampleUser = require('../data/sampleUser');

//show all users
const listUsers = (req, res) => {
    res.json(users);
};

//shows just one user
const showUser = (req, res) => {
  let user = users.find(user => user.id == req.params.id);
  res.json(user);
};

//create a user
const createUser = (req, res) => {
  let counter = users.length+1;
    sampleUser.id = counter;
    users.push(sampleUser);
    res.json(users);
};

//update user
const updateUser = (req, res) =>{
  let user = users.find(user => user.id == req.params.id);
    if(!user) { // can't find user
      res.status(404).send('User not found');
    }
  find.name = req.body.name;
  res.json(user);
};    

//delete user
const deleteUser = (req, res) => {
  let user = users.find(user => user.id == req.params.id);
  if(!user) { // can't find user
    res.status(404).send('User not found');
  }
  let findUser = users.indexOf(user);
    users.splice(findUser, 1);
    res.json('User deleted');
};



//exports all of the functions/methods created
module.exports = {listUsers, showUser, createUser, updateUser, deleteUser}