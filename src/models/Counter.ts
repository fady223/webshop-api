import mongoose from "mongoose"

export enum CounterEnum {
    Order = 'B',
    Invoice = 'R'
}


export async function getNextNumber(counterType: CounterEnum): Promise<number> {
    const isModelEmpty = await Counter.countDocuments()

    if (isModelEmpty === 0) {
        await Counter.create(
            { counterType: counterType, sequence_nr: 0 },
        )
    }
    const result = await Counter.findOneAndUpdate(
        { counterType: counterType },
        { $inc: { sequence_nr: 1 } },
        { returnOriginal: false }
    );
    if (result) return result.sequence_nr
    return 0
}


const CounterSchema = new mongoose.Schema({
    counterType: { type: String, enum: CounterEnum, required: true },
    sequence_nr: { type: Number, required: true, default: 0 }
})

const Counter = mongoose.model("Counter", CounterSchema)

export default Counter