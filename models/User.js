const mongoose = require('mongoose');
//const Schema = mongoose.Schema; de-structured version below
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

 // mongoose model class that gives us access
 // to the underlying users collection in mongoDB.
 // we use the model class to create a model instance
 // for each collection item i.e. user record.
mongoose.model('users', userSchema);