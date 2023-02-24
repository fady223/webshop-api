import mongoose, { mongo } from "mongoose"
import { UserAddress } from "../mongoose-types";

const UserAddressSchema = new mongoose.Schema<UserAddress>({
    userId: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    city: { type: String, required: true },
    postal_code: { type: String, required: true },
    country: { type: String, required: true },
    mobile: { type: String, required: true },
})

const UserAddressModel = mongoose.model<UserAddress>('UserAddress', UserAddressSchema);


export default UserAddressModel