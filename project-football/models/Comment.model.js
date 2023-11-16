const { Schema, model } = require('mongoose')

const commentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('Comment', commentSchema)