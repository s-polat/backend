import mongoose from 'mongoose';

export function connectMongoose(url) {
    mongoose.connect(url).then(() => {
        console.log('Connected to database');
    }).catch((err) => {
        console.error(err);
    });
}