const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    job: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
});

module.exports = mongoose.model('users', userSchema)