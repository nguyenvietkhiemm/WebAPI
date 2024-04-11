const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/alittledaisy_dev_API');
        console.log('Succesfully');
    } catch (error) {
        console.log('fail');
    }
}

module.exports = { connect };
