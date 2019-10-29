const mongoose = require('mongoose')


const LibrarySchema = mongoose.Schema({
    bookType: {
        type: String,
        required: true
    },
    bookNumber: {
        type: String,
        required: true,
        min: 8
    },
    bookName: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true

    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Library', LibrarySchema);