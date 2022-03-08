import db from '../database.js';
import User from '../models/users.model.js'
import { faker } from '@faker-js/faker';

export const getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

export const getUserById = async (req, res) => {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
        return res.status(400).send('Nicht gefunden');
    }
    
    res.json(user);
};

export const addUser = async (req, res) => {
    const data = req.body;
    // Testen ob data alle infos enthält: title, artist, year, cover, price
    if (!data.userName || !data.email || !data.password) {
        return res.status(400).send('Falsche Daten');
    }

    const existingUser = await User.findOne({email:data.email});
    if (existingUser){
        return res.status(400).send('Email already in use ')
    }
    
    const user = new User({
        userName: data.userName,
        email: data.email,
        password: data.password,
    });

    await user.save();

    //backende 100 tane fake kullanici ekledik. 
    for (let i = 0; i < 100; i++) {
        const randomUser = new User({
            userName:  faker.name.firstName(),
            email:   faker.internet.email(),
            password: faker.datatype.string(),
        });
        randomUser.save();
    }

    res.send(user);
}


export const loginUser =async (req, res) => {

    const data= req.body;
    if (!data.email || !data.password) {
        return res.status(400).send('Email or password empty');
    }

    const user = await User.findOne({email:data.email});
    if(user){
        const isValid = data.password===user.password;
        return res.json({
            message: 'success',
            data:{
                user: user,
            }
        })
    }else{
        return res.status(400).send('Account not found')
    } 
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await User.deleteOne({ _id: id });
        res.json(result);
    } catch (err) {
        return res.status(400).send('Nicht gefunden mit id: '+id+' - '+err);
    }
}