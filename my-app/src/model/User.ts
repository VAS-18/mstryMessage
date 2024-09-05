import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
    content: string;
    createdAt: Date
}


const MessageSchema: Schema<Message> = new Schema({

    content: {
        type: String,
        required: true,

    },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }

})



export interface User extends Document {
    username: string;
    password: string;
    email: string;
    isVerified: boolean;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isAcceptingMessage: boolean;
    messages: Message[]
}


const UserSchema: Schema<User> = new Schema({

    username: {
        required: [true, "Username required"],
        type: String,
        lowercase: true,
        trim: true,
        minlength: 4,
        maxlength: 8,
        unique: true
    },

    password: {
        required: [true, "Please Enter a password"],
        type: String,
        minlength: 8,
        unique: true
    },

    email: {
        required: [true, "Please Enter an Email"],
        type: String,
        unique: true,
        match: [/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, "Please use a valid email address"]
    },

    verifyCode: {
        required: [true, "verify code is required"],
        type: String

    },

    isVerified: {
        type: Boolean,
        default: false

    },

    isAcceptingMessage: {
        type: Boolean,
        default: true
    },

    messages: [MessageSchema]

})


const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema)


export default UserModel