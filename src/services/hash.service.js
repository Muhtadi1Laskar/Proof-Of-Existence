import crypto from "crypto";

export const generateHash = (buf) => {
    try {
        return crypto.createHash("sha256")
            .update(buf)
            .digest("hex");
    } catch (error) {
        console.error("Failed to generate hash", error);
        throw new Error("Failed to generate hash");
    }
}