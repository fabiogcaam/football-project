const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'El cuerpo del mensaje es obligatorio']
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'El cuerpo del mensaje es obligatorio']
    },
    password: {
      type: String,
      required: [true, 'El cuerpo del mensaje es obligatorio']
    },
    avatar: {
      type: String,
      default: 'https://i.stack.imgur.com/l60Hf.png'
    },
    description: {
      type: String,
      default: 'No existe descripción.'
    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    },
    isFavourite: [{
      type: Number
    }]
    // team: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Team'
    // }
  },
  {
    timestamps: true
  }
)


module.exports = model('User', userSchema)