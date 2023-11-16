const { Schema, model } = require('mongoose')

const commentSchema = new Schema({
    body: {
        type: String,
        required: [true, 'El cuerpo del mensaje es obligatorio']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    idPlayer: {
        type: Number,
        ref: 'User'
    }
}, {
    timestamps: true
})

module.exports = model('Comment', commentSchema)