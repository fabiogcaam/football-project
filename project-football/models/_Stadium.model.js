const { Schema, model } = require('mongoose')

const stadiumSchema = new Schema(
    {
        id: {
            type: Number,
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        capacity: {
            type: Number,
            required: true
        },
        surface: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        location: {
            type: {
                type: String
            },
            coordinates: {
                type: [Number]
            }
        }


    },
    {
        timestamps: true
    }
);

stadiumSchema.index({ location: '2dsphere' })


module.exports = model('Stadium', stadiumSchema)