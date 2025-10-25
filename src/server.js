import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 8080;
const databaseURL = process.env.MONGO_URI;

if (!databaseURL) {
    console.error("❌ Missing MONGO_URI in environment variables");
    process.exit(1);
}

mongoose.connect(databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(`✅ Connected to MongoDB at ${mongoose.connection.host}/${mongoose.connection.name}`);
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error(`❌ Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    });

process.on("SIGINT", async () => {
    await mongoose.connection.close()
    console.log("MongoDB connection closed due to app termination");
    process.exit(1);
})