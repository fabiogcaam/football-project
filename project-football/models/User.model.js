const { Schema, model, SchemaType } = require('mongoose')

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String
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
    //   type: SchemaType.Types.ObjectId,
    //   ref: 'Team'
    // }
  },
  {
    timestamps: true
  }
);


module.exports = model('User', userSchema)