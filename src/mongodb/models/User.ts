import mongoose, { mongo } from "mongoose"
import { User } from "../mongoose-types"


const UserSchema = new mongoose.Schema<User>({
    username: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String, required: false },
    email: {
        emailStr: { type: String, required: true },
        verified: { type: String, required: true }
    }
}, { timestamps: true })

const UserModel = mongoose.model<User>('User', UserSchema);

export default UserModel