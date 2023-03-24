const userModel = require("../models/user");

async function addUser(data) {
  try {
    const userData = new userModel(data);
    const res = await userData.save();
    return { id: res.id }
  } catch (error) {
    throw error;
  }
}

async function getAllUser() {
  try {
    const allUsers = await userModel.find({}, { __v: 0 });
    return allUsers
  } catch (error) {
    throw error;
  }
}
async function login(data) {
  try {
    const user = await userModel.findOne(data);
    if (user) {
      if (user.role === 'user')
        return "user";
      else
        return "admin";
    } else {
      throw new Error('Invalid Credentials');
    }
  } catch (err) {
    throw err;
  }
}

module.exports = { addUser, getAllUser, login };
