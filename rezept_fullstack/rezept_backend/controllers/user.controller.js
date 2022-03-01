const userModel = require('../models/users.model');
const bcrypt = require('bcrypt');

async function createUser(req, res) {
  let { username, firstName, lastName, email, password, city } = req.body;  
  //asagidaki kod ile pasaportu en az 8 carakter buyuk kucuk harfli rakamli ve asagidaki semboleri kullanarak yapma sarti getirdik
  if (
    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ]).{8,}$/.test(
      password
    )
  ) {
    res
      .status(400)
      .send(
        'Password should contain number, uppercase, lowercase, special character.'
      );
    return;
  }
  // asagidaki kod ile mail adresinin daha once girilip girilmedigini kontrol ettik
  const checkUser = await userModel.findOne({ email: email });
  if (checkUser) {
    res.status(400).send('User already exists');
    return;
  }
  //asagidaki kod ile passwordu sifreledik npm i bcrypt yapmayi unutma...
  password = await bcrypt.hash(password, 10);
  try {
    await userModel.create({ email, password, username, firstName, lastName, city });

    res.status(201).send('created');
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}


async function userLogin(req, res) {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email }).select('+password');
    try {
      if (!user) {
        res.status(404).send('User not found');
      }
      const newPassword = await bcrypt.compare(password, user.password);
      if (newPassword === true) {
        res.status(200).send('Login successful');
      } else {
        res.status(404).send('Wrong password');
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
  
  async function getUserById(req, res) {
    const { id } = req.params;
    const user = await userModel.findById(id).populate('Recipes');
    try {
      if (!user) {
        res.status(404).send('User not found');
      }
      res.status(200).send(user);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async function userUpdate (req, res) {
    try {
        const id= req.params.id;
        console.log(req.body);
        const user = await userModel.findByIdAndUpdate(id , req.body, {
            new: true,
            runValidators: true,
            context: 'query'
            } );
        res.json(user);
        
    } catch (error) {
        console.log(error);
    }
};

async function deleteUser (req, res)  {
    const { id } = req.params;
    try {
        const user = await userModel.deleteOne({ _id: id });
        res.json(user);
    } catch (err) {
        return res.status(400).send('Nicht gefunden mit id: '+id+' - '+err);
    }
}
  
  module.exports = { userLogin, getUserById, createUser, userUpdate, deleteUser };