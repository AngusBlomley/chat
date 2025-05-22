const mongoose = reqiure('mongoose');

const userSchema = mongoose.userSchema({
    username: {type: string, required: true},
    email: {type: string, required: true, unique: true},
    password: {type: string, required: true}
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema)