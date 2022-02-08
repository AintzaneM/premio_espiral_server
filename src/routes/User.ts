import {Schema, model} from "mongoose";

const userSchema = new Schema ({
    email: {
        type: String,
        required: false,
        trim: true,
    },
    password : {
        type: String,
        required: false,
        trim: true,
    },
    },{

        versionKey: false,
        timestamps: true,

});

export default model("User", userSchema)