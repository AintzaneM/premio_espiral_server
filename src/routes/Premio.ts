import {Schema, model} from "mongoose";

const premioSchema = new Schema ({
    title: {
        type: String,
        required: false,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    url: {
        type: String,
        required: false,
        trim: true,
       
    },
    img: {
        type: String,
        required: false,
        trim: true,
    },
    owner: {
        type: String,
        required: false,
        trim: true,
    }, 
    
    },{

        versionKey: false,
        timestamps:true,
});

export default model("Premio", premioSchema)


