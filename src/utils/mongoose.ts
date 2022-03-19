import { connect, connection } from "mongoose";

const conn = {
  isConnected : <boolean>false,
};

export async function dbConnect() {
  if (conn.isConnected) return;

  const db: any = await connect(<string>process.env.MONGODB_URI);

  conn.isConnected = db.connections[0].readyState;
}

connection.on("connected", () => {
  console.log("Mongodb connected to db");
});

connection.on("error", (err) => {
  console.error("Mongodb connected to", err.message);
});