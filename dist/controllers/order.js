"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = require("express");
const Counter_1 = require("../mongodb/models/Counter");
const Order_1 = __importDefault(require("../mongodb/models/Order"));
const orderRouter = (0, express_1.Router)();
exports.orderRouter = orderRouter;
orderRouter.get("/orders", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    Order_1.default.find({}).then((orders) => {
        res.json(orders);
    }).catch((err) => {
        res.json(err);
    });
}));
orderRouter.post("/new", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    const nextOrderNr = yield (0, Counter_1.getNextNumber)(Counter_1.CounterEnum.Order);
    const orderNr = Counter_1.CounterEnum.Order + nextOrderNr;
    if (nextOrderNr !== 0) {
        const order = yield Order_1.default.create({ _id: orderNr });
        res.json(order);
        return 0;
    }
    res.status(500).json({ "error": 'the order cannot be created' });
}));
//# sourceMappingURL=order.js.map