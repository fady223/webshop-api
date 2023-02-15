"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToMongo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const URL = process.env.MONGO_URL;
function connectToMongo() {
    mongoose_1.default.connect(URL, { serverSelectionTimeoutMS: 6000, }).then(() => {
        console.log("mongo is connected");
    }).catch((err) => {
        console.log(err.message);
    });
}
exports.connectToMongo = connectToMongo;
//# sourceMappingURL=MongoConnect.js.map