import { MongoClient, Database } from "https://deno.land/x/mongo@v0.8.0/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

let db: Database;

export function connect() {
  const client = new MongoClient();
  client.connectWithUri(config().MONGODB_URI);
  db = client.database("todo-app");
}

export function getDb() {
  return db;
}
