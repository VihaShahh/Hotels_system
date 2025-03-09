import mongoose from "mongoose";
import { MongoClient } from "mongodb";

const MONGO_URI = "mongodb://127.0.0.1:27017"; // Use 127.0.0.1 instead of localhost

// Function to connect with Mongoose
const connectMongoose = async () => {
  try {
    await mongoose.connect(`${MONGO_URI}/buddy-deals`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Mongoose: MongoDB Connected Successfully");
  } catch (error) {
    console.error(`❌ Mongoose Connection Error: ${error.message}`);
    process.exit(1);
  }
};

// Function to connect with MongoClient
const connectMongoClient = async () => {
  const client = new MongoClient(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log("✅ MongoClient: Connected to MongoDB");

    const db = client.db("testDB");
    const collection = db.collection("users");

    // Insert a sample document
    const result = await collection.insertOne({ name: "John Doe", age: 30 });
    console.log("✅ Inserted document:", result.insertedId);

    // Find the inserted document
    const user = await collection.findOne({ name: "John Doe" });
    console.log("🔍 Found user:", user);
  } catch (error) {
    console.error("❌ MongoClient Connection Error:", error);
  } finally {
    await client.close();
  }
};

// Connect to Mongoose and MongoClient
connectMongoose();
connectMongoClient();
