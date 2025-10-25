import mongoose from "mongoose";

const metadata = mongoose.Schema({
    fileName: { type: String, required: false },
    size: { type: Number, required: false },
    type: { type: String, required: false }
});

const ProofSchema = new mongoose.Schema({
    hash: { type: String, required: true },
    algorithm: { type: String, default: "SHA-256" },
    owner: { type: String, required: true },
    timestamp: { type: Date, required: true },
    metadata: metadata,
    onChainTx: { type: String, default: "" }
});

const proofModel = mongoose.model("Proof", ProofSchema);

export default proofModel;