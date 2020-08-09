
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now
    }
});

let Post = mongoose.model('Post', PostSchema);
module.exports = Post;