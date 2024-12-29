import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// Extend globalThis to include a mongoose property
declare global {
  var mongoose: {
    conn: mongoose.Mongoose | null; // Correct type for conn
    promise: Promise<mongoose.Mongoose> | null;
  };
}

/**
 * Cached connection for MongoDB.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    // Use a non-null assertion to guarantee MONGODB_URI is a string
    cached.promise = mongoose.connect(MONGODB_URI!).then((mongoose) => {
      return mongoose; // Return the instance of mongoose
    });
  }
  cached.conn = await cached.promise; // Assign the resolved promise
  return cached.conn;
}

export default dbConnect;
