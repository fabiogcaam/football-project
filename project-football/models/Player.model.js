const { Schema, model } = require('mongoose')

const playerSchema = new Schema(
    {
        owner: {
            ref: Schema.Types.ObjectId,
            ref: 'User'
        },
        firstname: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        nationality: {
            type: String,
            required: true
        },
        height: {
            type: String,
            required: true
        },
        weight: {
            type: String,
            required: true
        },
        injured: {
            type: Boolean,
            default: false
        },
        photo: {
            type: String
        },
        statistic: {
            games: {
                appearences: {
                    type: Number,
                    required: true
                },
                minutes: {
                    type: String,
                    required: true
                },
                position: {
                    type: String,
                    enum: ["Goalkeeper", "Defense", "Midfilder", "Attacker"],
                    required: true
                },
                rating: {
                    type: Float32Array,
                    required: true
                },
                captain: {
                    type: Boolean,
                    required: true
                }
            },
            shots: {
                total: {
                    type: Number,
                    required: true
                },
                on: {
                    type: Number,
                    required: true
                }
            },
            goals: {
                total: {
                    type: Number,
                    required: true
                },
                assists: {
                    type: Number,
                    required: true
                },
                saves: {
                    type: Number,
                    required: true
                }
            },
            passes: {
                total: {
                    type: Number,
                    required: true
                },
                key: {
                    type: Number,
                    required: true
                },
                accuracy: {
                    type: Number,
                    required: true
                }
            }

        }
    },
    {
        timestamps: true
    }
);


module.exports = model('Player', playerSchema)